<script>
</script>

<template>
    <h2>Mijn web werk</h2>
    
    <section class="sneaker-section">
        <div class="section-text">
            <h3>Sneaker website</h3>
            <p>Een sneaker webshop oefening van Web Expert 1 die ik gemaakt heb.</p> 
        </div>
        <div class="section-image">
            <img src="\assets\images\WebExpertSassOefening-min.jpeg" alt="Afbeelding van sneaker website">
        </div>
    </section>
    <section class="offroad-section">
        <div class="section-text">
            <h3>Offroad website</h3>
            <p>Een fiets webshop oefening van Web Essentials die ik gemaakt heb. (Zonder iconen)</p> 
        </div>
        <div class="section-image">
            <img src="\assets\images\WebEssentialsOffroadOef-min.jpeg" alt="Afbeelding van offroad website">
        </div>
    </section>
    <section class="duikclub-section">
        <div class="section-text">
            <h3>Duikclub website</h3>
            <p>Een duikclub website die ik voor mijn Web Essentials examen gemaakt heb.</p> 
        </div>
        <div class="section-image">
            <img src="\assets\images\WebEssentialsExamenOefening-min.jpeg" alt="Afbeelding van duikclub website">
        </div>
    </section>

    
</template>

<style scoped lang="scss">
section {
    @include flex($direction: column, $gap: $font-small);
    margin: $font-large auto;
    width: 100%;

    .section-text {
        @include flex($direction: column, $gap: $font-small);
        text-align: center;
    }

    .section-image {
        img {
            height: fit-content;
        }
    }

    a {
        text-decoration: underline;
        color: $primary-color;
    }
}
</style>