<script>
  export default {
    data() {
      return {
        selected: 'hard',
        hardSkills: [
            { name: 'JavaScript', proficiency: '80%'},
            { name: 'HTML', proficiency: '70%'},
            { name: 'CSS', proficiency: '80%'},
            { name: 'Vue', proficiency: '75%'}
        ],
        softSkills: [
            { name: 'Teamwork', proficiency: '70%'},
            { name: 'Communicatie', proficiency: '75%'},
            { name: 'Tijdmanagement', proficiency: '60%'},
            { name: 'Flexibiliteit', proficiency: '80%'}
        ]
      }
    }
  }
</script>

<template>
    <div class="skills-container">
        <div class="toggle-buttons">
            <input type="radio" id="hard" value="hard" v-model="selected">
            <label for="hard" :class="{ active: selected === 'hard' }">Hard</label>
    
            <input type="radio" id="soft" value="soft" v-model="selected">
            <label for="soft" :class="{ active: selected === 'soft' }">Soft</label>
        </div>
        <div class="skills-content">
            <div v-if="selected === 'hard'">
                <div class="skills-description">
                    <p>Hier is een lijst van mijn <br><span>hard skills</span></p>
                </div>
                <div class="skills-listing">
                    <div class="skill" v-for="(skill, index) in hardSkills">
                        <div class="skill-div">
                            <div :style="{ width: skill.proficiency }">{{skill.name}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="selected === 'soft'">
                <div class="skills-description">
                    <p>Hier is een lijst van mijn <br><span>soft skills</span></p>
                </div>
                <div class="skills-listing">
                    <div class="skill" v-for="(skill, index) in softSkills">
                        <div class="skill-div">
                            <div :style="{ width: skill.proficiency }">{{skill.name}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .skills-container {
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

        .skills-content {
            text-align: center;
            width: 100%;

            .skills-description {
                @include flex($gap: $font-small, $direction: column);
                margin: $font-med 0;
                
                span {
                    color: $primary-color;
                }
            }
            .skills-listing {
                @include flex($direction: column, $align: flex-start, $gap: $font-small);
              
                .skill {
                    width: 100%;

                    p {
                        text-align: right;
                        margin: auto 0.5rem auto 0;
                        font-size: 0.8rem;
                    }
                    .skill-div {
                        width: 100%;
                        height: 2rem;
                        border: 2px solid $primary-color;
                        border-radius: 0.5rem;
                        

                        div {
                            @include flex($justify: flex-start);
                            height: 100%;
                            padding-left: $font-small;
                            background-color: rgba($primary-color, 0.5);
                            color: $text-color;
                            font-weight: 600;
                            overflow: hidden;
                        }
                    }
                }
            }
        }
    }
    
    
    
</style>