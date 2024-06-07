<script>

</script>

<template>
    <h2>Werkplekleren 2</h2>
    <section class="case-section">
        <div class="section-text">
            <h3>Case: Yappa - areyouwaterproof</h3>

            <h4>Wat is areyouwaterproof</h4>
            <p>Areyouwaterproof is een website die als doel heeft om mensen te informeren over de maritieme sector.</p> 
           
            <h4>Onze taak</h4>
            <p>Wij kregen de opdracht om de verouderde website van areyouwaterproof te vervangen met een nieuwere, betere versie om meer mensen in de maritieme sector te brengen.</p>
            
            <h4>Verloop</h4>
            <p>We begonnen met research rondom onze gebruikers en onze concurrenten. Hierdoor hebben we vast kunnen stellen wat belangrijk was voor onze gebruikers en inspiratie kunnen nemen uit dingen die onze concurrenten goed deden.</p>
            <p>Daarna hebben we wireframes, visual designs en een concept voor onze app gemaakt. Na een feedback moment bleek dat ze niet goed genoeg waren en dus hebben we met deze kennis grote aanpassingen gemaakt aan onze designs.</p>
            <p>Uiteindelijk hebben we onze gefinaliseerde designs geprogrammeerd met vue. We zijn mobile-first begonnen en hebben de site daarna responsive gemaakt.</p>   
        </div>
        <div class="section-text">
            <h3>Mijn aandeel</h3>
            
            <h4>Sprint 1</h4>
            <p>Tijdens sprint 1 hab ik geholpen met research over onze gebruikers/concurrenten, met becnhmarking en met onze visie & missie.</p>
            <p>Met user research had ik geholpen door interviews af te nemen. Dan had ik met concurrenten research geholpen door de sites van de brandweer en van het leger te analyseren.</p>
            <p>Ik had met becnhmarking geholpen door de interview resultaten in een mindmap te zetten en ik had geholpen om onze missie en visie te bepalen</p>
           
            <h4>Sprint 2</h4>
            <p>Tijdens sprint 2 had ik geholpen met de branding en de informatie architectuur van ons project.</p>
            <p>Op vlak van branding had ik geholpen met het bepalen van ons eerste kleurenpalet en onze font.</p>
            <p>Dan bij de informatie architectuur had ik geholpen door een sitemap te maken van de oude areyouwaterproof site en een sitemap voor te stellen voor onze website en app.</p>

            <h4>Sprint 3</h4>
            <p>Tijdens sprint 3 had ik gewerkt aan de front-end en de backend van onze website.</p>
            <p>Aan de front-end had ik de jobs pagina gemaakt en had ik geholpen op de contact pagina.</p>
            <p>Op vlak van de backend had ik met Seth het originele concept van de backend bedacht en was ik tijdens deze sprint begonnen met het coderen van de backend, hoewel die nog lang niet af was.</p>
            
            <h4>Sprint 4</h4>
            <p>Tijdens sprint 4 had ik de backend gemaakt en ook een beetje gewerkt aan de front-end van onze site.</p>
            <p>Ik had de volledige backend functioneel gemaakt op localhost, hoewel die op netlify nog niet helemaal zoals gewenst werkte.</p>
            <p>Bij de front-end had ik de nieuwe jobs pagina gemaakt, geholpen op de contact pagina, het job-gedeelte van de home pagina aangepast en had ik in het begin een klein deel van de opleidingen pagina gedaan.</p>
        </div>
    </section>

    <section class="deliverables-section">
        <h3>Deliverables</h3>
        <div class="deliverable-container">
            <h4>Home pagina van onze website</h4>
            <div class="section-image">
                <img src="" alt="Afbeelding van areyouwaterproof home pagina">
            </div>
            <a href="https://ayw-groep-02.netlify.app/" target="_blank">Link naar Netlify</a>
        </div>
        
        <div class="deliverable-container">
            <h4>Scherm van onze app</h4>
            <div class="section-image">
                <img src="" alt="Afbeelding van app scherm">
            </div>
            <a href="https://www.figma.com/design/r82eZ0hqebgXsdQAwtIszs/Are-You-Waterproof?node-id=582-815&t=cYWnCrYJFcr9TZzO-0" target="_blank">Link naar Figma</a>
        </div>

        <div class="deliverable-container">
            <h4>Ons Miro bord</h4>
            <div class="section-image">
                <img src="" alt="Afbeelding van Miro bord">
            </div>
            <a href="https://miro.com/app/board/uXjVNtuHDHo=/" target="_blank">Link naar Miro</a>
        </div>
            

        
    </section>

    <div class="eindreflectie">
        <h2>Eindreflectie</h2>
        <section>

        </section>
    </div>
</template>

<style scoped lang="scss">
section {
    @include flex($direction: column, $gap: $font-large);
    margin: $font-large auto;
    width: clamp(300px, 80vw, 800px);

    .section-text {
        @include flex($direction: column, $align: flex-start, $gap: $font-small);
    }

    .deliverable-container {
        @include flex($direction: column, $gap: $font-small);
    }

    a {
        text-decoration: underline;
        color: $primary-color;
    }
}
</style>