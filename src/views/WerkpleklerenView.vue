<script>
import BreakComponent from '@/components/BreakComponent.vue'
import WPL1Component from '@/components/WPL1Component.vue'
import WPL2Component from '@/components/WPL2Component.vue'

export default {
    data() {
        return {
            selected: 'wpl1'
        }
    },
    components: {
        BreakComponent,
        WPL1Component,
        WPL2Component
    }  
}
</script>

<template>
    <div class="wpl-container">
        <div class="toggle-buttons">
            <input type="radio" id="wpl1" value="wpl1" v-model="selected">
            <label for="wpl1" :class="{ active: selected === 'wpl1' }">WPL1</label>

            <input type="radio" id="wpl2" value="wpl2" v-model="selected">
            <label for="wpl2" :class="{ active: selected === 'wpl2' }">WPL2</label>
        </div>
    </div>
    <WPL1Component class="wplComponent" v-if="selected === 'wpl1'"/>
    <WPL2Component class="wplComponent" v-if="selected === 'wpl2'"/>
    <BreakComponent/>
</template>

<style scoped lang="scss">
   .wpl-container {
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
