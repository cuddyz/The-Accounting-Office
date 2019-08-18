<template>
  <nav class="flex align-center">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/team">Team</router-link>
    <router-link to="/careers">Careers</router-link>
    <router-link to="/contact">Contact Us</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  nav {
    position: absolute;
    top: 0;
    right: 0;
    height: 10vh;
    padding: 1rem;
    z-index: 1;

    @media (min-width: breaks(phone)) {
      padding: 1rem 1rem 1rem 2rem;
    }

    @media (min-width: breaks(phablet)) {
      padding: 1rem 2.5rem;
    }
  }

  img {
    width: 75px;

    @media (min-width: breaks(phablet)) {
      width: 100px;
    }
  }

  a {
    font-size: 1.2em;
    padding-right: 0.75rem;
    color: color(white);

    @media (min-width: breaks(phablet)) {
      padding-right: 1rem;
    }

    text-transform: uppercase;
  }
</style>
