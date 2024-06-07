<script>

</script>

<template>
    <h2>Werkplekleren 1</h2>
    <section class="pop-section">
        <div class="section-text">
            <h3>Persoonlijk OntwikkelingsPlan</h3>
            <p>Hier zijn de opdrachten uit de POP sessies van Werkplekleren 1.</p> 
            <a href="https://miro.com/app/board/uXjVN5gcTmY=/?share_link_id=291638365652" target="_blank" class="anchorLink">Link naar Miro bord</a>
        </div>
        <div class="section-image">
            <img src="" alt="Afbeelding van POP opdracht">
        </div>
    </section>
    <section class="werkveld-section">
        <div class="section-text">
            <h3>Werkveldverkenning</h3>
            <p>Hier zijn de opdrachten uit de Werkveldverkenning sessies van Werkplekleren 1.</p> 
            <a href="https://miro.com/app/board/uXjVN5gcTmY=/?share_link_id=291638365652" target="_blank" class="anchorLink">Link naar Miro bord</a>
        </div>
        <div class="section-image">
            <img src="" alt="Afbeelding van Werkveldverkenning opdracht">
        </div>
    </section>
    <section class="dashboard-section">
        <div class="section-text">
            <h3>Dashboard CV</h3>
            <p>Hier is mijn Dashboard CV opdracht van Werkplekleren 1.</p> 
            <a href="https://miro.com/app/board/uXjVNXDiiZw=/" target="_blank" class="anchorLink">Link naar groep Miro bord</a>
        </div>
        <div class="section-image">
            <img src="" alt="Afbeelding van Dashboard CV">
        </div>
    </section>
    <div class="eindreflectie">
        <h2>Eindreflectie</h2>
        <section>
            <h3>Wat heb ik tijdens Werkplekleren 1 geleerd?</h3>
            <p>Op organisatorisch vlak heb ik geleerd hoe ik met mensen die andere skill sets beheren dan mezelf samen kan werken. Dan heb ik geleerd om te werken aan de hand van een planning die we zelf gemaakt hebben. Daarnaast heb ik door zowel tijdens de lesmomenten als daarbuiten contact met mijn groep te houden geleerd om beter te communiceren. Ten slotte heb ik ook geleerd hoe ik overzichtelijk een project tijdlijn bij kan houden door het gebruik van een Kanban Board.</p>
            <p>Op persoonlijk vlak heb ik meer geleerd over onder welke omstandigheden ik het best mijn werk kan verrichten. Ik vind het namelijk makkelijker om aan iets te werken als anderen van mij afhankelijk zijn vergeleken met als ik iets voor mezelf doe. Ook heb ik geleerd om bewuster te zijn van mijn professionele houding omdat we ons formeel moesten opstellen en altijd op tijd moesten zijn. Ten slotte ben ik ook iets beter geworden in initiatief nemen.</p>
            <p>Op technisch vlak heb ik moeten leren omgaan met Figma en moest ik mijn kennis van Miro ook een beetje opfrissen. Ik had al een beetje ervaring in Adobe XD dus over gaan naar Figma ging redelijk vlot, het was vooral de basis terug opfrissen en dan een paar nieuwe dingen bijleren.</p>
        
            <h3>Hoe zag ik mezelf groeien tijdens Werkplekleren 1?</h3>
            <p>Ik denk dat ik tijdens Werkplekleren 1 vooral op vlak van soft skills ben gegroeid. Het belang van communicatie en een goede planning zijn naar mijn mening de belangrijkste dingen die ik uit het vak gehaald heb. Daarbuiten heb ik op vlak van hard skills ook wat kennis van Figma opgedaan en aan mijn professionele houding gewerkt.</p>
        
            <h3>Welke professionele kwaliteiten bezit ik en heb ik gebruikt tijdens Werkplekleren 1?</h3>
            <p>Ik denk dat mijn sterkste kwaliteit mijn mindset is, ik kijk graag door een optimistische lens en probeer graag ambitieuze projecten waar ik nieuwe dingen voor moet bijleren. Zo wou ik bijvoorbeeld bij mijn dashboard met een stijlgids + moodboard werken en toggles er in integreren ondanks dat ik niet wist hoe ik zo een toggle kon maken. Hierdoor kwam ik tijdelijk een beetje achter de planning te staan, maar ik maakte me geen zorgen omdat ik nog genoeg tijd had om het bij te werken en dat had ik ook gedaan.</p>
        
            <h3>Welke professionele kwaliteiten wens ik nog verder uit te breiden tijdens Werkplekleren 2?</h3>
            <p>Vaardigheden waar ik tijdens Werkplekleren 2 nog zeker aan wil werken zijn mijn time management en planning. Zoals eerder vermeld was ik tijdens Werkplekleren 1 een tijdje achter de planning gekomen, en hoewel het uiteindelijk goed was gekomen zou ik dat in de toekomst liever vermijden. Communicatie is iets dat altijd wel beter mag/kan worden dus daar zal ik proberen bewust van te zijn wanneer ik met een nieuwe groep moet gaan werken. Daarnaast zou ik ook nog willen werken aan mijn leiderschapsvaardigheiden en proberen om meer initiatief te nemen.</p>

            <h3>Laatste opmerkingen over Werkplekleren 1.</h3>
            <p>Ik vind het persoonlijk raar dat je voor één keer afwezig te zijn het vak uit gezet kan worden waardoor je hele opleiding een jaar extra duurt. Tijdens de lessen was het meeste wel duidelijk vermeld en anders stond het in de presentaties, dus op dat vlak kan ik niet echt klagen.</p>
        </section>
    </div>
</template>

<style scoped lang="scss">
section {
    @include flex($direction: column, $gap: $font-small);
    margin: $font-large auto;
    width: clamp(300px, 80vw, 800px);

    .section-text {
        @include flex($direction: column, $gap: $font-small);
        text-align: center;
    }

    a {
        text-decoration: underline;
        color: $primary-color;
    }
}
.eindreflectie {
    
    section {
        align-items: flex-start;
    }
}

</style>