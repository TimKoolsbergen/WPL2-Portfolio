<script>
  export default {
    data() {
        return {
            showTooltip: false,
            contactInfo: [
                {text: "Email: ", value: "12104040@student.pxl.be"},
                {text: "Tel: ", value: "+32 475 97 29 10"}
            ]
        };
    },
    methods: {
        copyToClipboard(text) {
            const textToCopy = text;

            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);

            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    }
  }
</script>

<template>
<div class="contact-info">
    <h4>Tim Koolsbergen</h4>
    <p v-for="(contact, index) in contactInfo">{{ contact.text }}
        <span @click="copyToClipboard(contact.value)" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">{{ contact.value }}
            <span v-if="showTooltip" class="tooltip">Click to copy</span>
    </span></p>
    
    <p>LinkedIn: <span><a href="https://www.linkedin.com/in/tim-koolsbergen-b27bb0266/" target="_blank">LinkedIn profiel</a></span></p>
</div>

</template>

<style scoped lang="scss">
.contact-info {
    @include flex($direction: column, $gap: $font-small);
    margin: 2rem 0;

    span {
        cursor: pointer;
        color: $primary-color;
        position: relative; 
        a {
            text-decoration: underline;
            color: inherit;
        }
        .tooltip {
            position: absolute;
            top: -$font-small;
            left: 50%;
            transform: translateX(-50%); // zorgt dat left: 50% gecentreerd is
            background-color: rgba($text-color, 0.2);
            color: $primary-color;
            padding: ($font-small*0.25);
            border-radius: ($font-small*0.25);
            font-size: 0.8rem;
            white-space: nowrap;
            display: none; 
        }
        &:hover .tooltip {
            display: block; // laat tooltip zien on hover
        }
    }

   

    
}


</style>