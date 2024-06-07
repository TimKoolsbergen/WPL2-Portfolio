<script>
import BreakComponent from '@/components/BreakComponent.vue'
import WebWorkComponent from '@/components/WebWorkComponent.vue'
import DesignWorkComponent from '@/components/DesignWorkComponent.vue'

export default {
    data() {
        return {
            selected: 'web'
        }
    },
    components: {
        BreakComponent,
        WebWorkComponent,
        DesignWorkComponent
    }  
}
</script>

<template>
    <div class="work-container">
        <div class="toggle-buttons">
            <input type="radio" id="web" value="web" v-model="selected">
            <label for="web" :class="{ active: selected === 'web' }">Web</label>

            <input type="radio" id="design" value="design" v-model="selected">
            <label for="design" :class="{ active: selected === 'design' }">Design</label>
        </div>
    </div>
    <WebWorkComponent class="workComponent" v-if="selected === 'web'"/>
    <DesignWorkComponent class="workComponent" v-if="selected === 'design'"/>
    <BreakComponent/>
</template>

<style scoped lang="scss">
   .work-container {
        @include flex($direction: column);
        margin: $font-med 0;

        .toggle-buttons {
            @include flex();
            border: 2px solid $primary-color;
            border-radius: 0.5rem;
            
            input {
                display: none; 
            }
            label {
                text-align: center;
                width: 50%;
                padding: 0.5rem 1rem;
                cursor: pointer;
                @include transition();
                font-size: $font-small;
                font-weight: 600;

                &.active {
                    background-color: rgba($primary-color, 0.9); // leesbaarheid
                }
            }
        }
   }    
   .wplComponent {
        width: 80%;
        margin: 0 auto;
   }
</style>