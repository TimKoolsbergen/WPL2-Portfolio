<script>
import BreakComponent from '@/components/BreakComponent.vue'
import MySkillsComponent from '@/components/MySkillsComponent.vue'
import ContactComponent from '@/components/ContactComponent.vue'

export default {
  components: {
    BreakComponent,
    MySkillsComponent,
    ContactComponent
  },
  methods: {
    scrollToContact() {
      const targetElement = document.getElementById('contact');
      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        const duration = 500; // Duration of the scroll animation in milliseconds

        this.scrollTo(offsetTop, duration);
      }  
    },
    scrollTo(offset, duration) {
      const start = window.pageYOffset;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animateScroll = () => {
        const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        const timeElapsed = currentTime - startTime;
        const scrollY = easeInOutQuad(timeElapsed, start, offset - start, duration);
        window.scrollTo(0, scrollY);
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }
 
}
</script>

<template>
  <header>
    <section class="header-section">
      <h1>TIM</h1>
      <div id="profile-image">
        <img src="" alt="image of Tim Koolsbergen">
      </div>
      <button @click.prevent="scrollToContact">Contact me!</button>
    </section>

    <section class="about-me-section">
      <h2>Over mij</h2>
      <p>Mijn naam is Tim Koolsbergen, ik ben student Digitale Vormgeving aan de PXL in Hasselt en ik wil als web developer gaan werken.</p>
      <h3>Interesses</h3>
      <p>In mijn vrije tijd doe ik onder andere graag wandelen, muurklimmen, bordspellen spelen en zonnen.</p>
    </section>
  </header>
  <BreakComponent/>
  <main>
    <section class="skills-section">
      <h2>Mijn skills</h2>
      <MySkillsComponent/>
    </section>
    <BreakComponent/>
    <section class="contact-section">
      <h2 id="contact">Contact</h2>
      <ContactComponent/>
    </section>
  </main>
</template>

<style scoped lang="scss">
header {
  @include flex($direction: column);
  
  section {
    @include flex($direction: column, $gap: $font-small);
    margin: $font-med 0;

    #profile-image {
      
    }
  }
  .about-me-section {
    
    gap: 0;

    p {
      margin: $font-small 0 $font-med 0;
    }
  }
}
main {
  section {
    margin-bottom: ($font-med*2);
  }
}
</style>