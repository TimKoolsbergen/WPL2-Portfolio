<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <h1 id="name-text">TIM</h1>
    <div id="profile-image">
      <img src="" alt="image of Tim Koolsbergen">
    </div>
  </header>
 



<!--
 <div class="test-container">
  <div class="box-1"></div>
  <div class="box-2"></div>
 </div>
-->
</template>

<style scoped lang="scss">


header {
  @include flex($direction: column, $gap: 1rem);
  margin: 2rem 0;

  #name-text {
    @include gradient-text();
    font-size: $font-xl; 
    font-weight: bold;
    letter-spacing: -0.02em;
    text-align: center;
  }
  #profile-image {
    width: 80vw;
    height: 80vw;
    background-color: black;
  }
}

/*
.test-container {
  width: 20rem;
  height: 10rem;
  background-color: rgba(255, 255, 255, 0.2);
  @include flex($justify: space-around);

  div {
    height: 5rem;
    width: 5rem;
    background-color: bisque;
  }

}
*/
</style>
