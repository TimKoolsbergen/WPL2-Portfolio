<script>
</script>

<template>
    <h2>Mijn design werk</h2>
    <section class="GS1-section">
        <div class="section-text">
            <h3>Graphic Skills 1 opdracht</h3>
            <p>Een Permanente Evaluatie opdracht van Graphic Skills 1 die ik met Illustrator gemaakt heb.</p> 
        </div>
        <div class="section-image">
            <img src="\assets\images\GS1IllustratorPE-min.png" alt="Afbeelding van GS1 opdracht">
        </div>
    </section>

    <section class="cheese-section">
        <div class="section-text">
            <h3>Cheese</h3>
            <p>Een stuk kaas dat ik met Illustrator gemaakt heb.</p> 
        </div>
        <div class="section-image">
            <img src="\assets\images\KaasIllustratie-min.png" alt="Afbeelding van cheese">
        </div>
    </section>

    <section class="tortoise-section">
        <div class="section-text">
            <h3>Tortoise Photoshop</h3>
            <p>Een oefening voor Graphic Skills 2 die ik met Photoshop gemaakt heb.</p> 
        </div>
        <div class="section-image">
            <img src="\assets\images\GS2PhotoshopOef-min.png" alt="Afbeelding van tortoise Photoshop">
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    @include flex($direction: column, $gap: $font-small);
    margin: $font-large auto;
    max-width: 600px;

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