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
 
}
</script>

<template>
  <header>
    <section class="header-section">
      <h1>TIM</h1>
      <div id="profile-image">
        <img src="" alt="image of Tim Koolsbergen">
      </div>
      <button>Contact me!</button>
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
      <h2>Contact</h2>
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
      @include flex();
      width: clamp(5rem, 80vw, 600px);
      height: clamp(5rem, 80vw, 600px);
      background-color: black;
      border-radius: 2rem
    }
  }
  .about-me-section {
    align-items: flex-start;
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