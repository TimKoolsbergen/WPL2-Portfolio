<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav>
    <RouterLink to="/" class="nav-item active">
      ME
    </RouterLink>
    <RouterLink to="/work" class="nav-item">
      WORK
    </RouterLink>
    <RouterLink to="/wpl" class="nav-item">
      WPL
    </RouterLink>
  </nav>

  <RouterView/>
 



<!--
 <div class="test-container">
  <div class="box-1"></div>
  <div class="box-2"></div>
 </div>
-->
</template>

<style scoped lang="scss">

nav {
  @include flex($justify: space-between, $align: flex-start);
  position: fixed;
  top: 0;
  left: 10vw;
  right: 10vw;

  .nav-item {
    @include flex($align: flex-end);
    padding-bottom: 0.5rem;
    background-color: rgba($bg-color, 0.9);
    width: 30%;
    height: 2.4rem;
    border: 2px solid $text-color;
    border-top: none;
    border-radius: 0 0 .5rem .5rem;
    color: $text-color;
    font-size: $font-small;
    // font-weight: bold;
    text-align: center;
    text-decoration: none;
    @include transition();

   
    &:hover {
      background-color: rgba($bg-color, 1);
      border-color: $primary-color;
      color: $primary-color;
    }
  }

  .router-link-active { // misschien html data property gebruiken
    border-color: $primary-color;
    color: $primary-color;
    height: 2.8rem;
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
