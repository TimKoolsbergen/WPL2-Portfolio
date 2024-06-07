<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav>
    <RouterLink to="/" class="nav-item active">
      TIM
    </RouterLink>
    <RouterLink to="/work" class="nav-item">
      WERK
    </RouterLink>
    <RouterLink to="/wpl" class="nav-item">
      WPL
    </RouterLink>
  </nav>

  <RouterView/>
 
  <footer>
    <h4>Copyright @ Tim Koolsbergen 2024</h4>
  </footer>
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
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    @include transition();

    &:hover {
      background-color: rgba($bg-color, 1);
      border-color: $primary-color;
      color: $primary-color;
    }
  }

  .router-link-active { 
    border-color: $primary-color;
    color: $primary-color;
    height: 2.8rem;
  }
}

footer {
  height: 5rem;
  width: 100%;
  position: absolute;
  left: 0;
  @include flex();
  background-color: rgba(#000, 0.5);
  margin-top: $font-med;
}
</style>
