<template>
  <article>
    <section class="flex align-center">
      <div class="img-container">
        <img src="/images/Logo.png" />
      </div>
      <div class="pl-1">
        <h1>Gielow</h1>
        <h1 class="pl-2">Krebs</h1>
      </div>
    </section>
    <section class="mt-1 ml-1">
      <h2>Accounting. Anywhere.</h2>
    </section>
    <section class="text-center m-2">
      <button class="clear">Learn More</button>
      <button class="ml-1">Contact Us</button>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  article {
    height: 100vh;
    max-height: 100vh;
    padding: 2rem 0 0 2rem;

    background: url('/images/Banner.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    color: color(white);

    .img-container {
      height: 15rem;
      width: 15rem;

      img {
        height: 100%;
        width: 100%;
      }
    }

    h1 {
      font-size: 4em;
    }

    h2 {
      font-size: 3.5em;
    }

    button {
      font-size: 1.2em;
      border: 5px solid color(white);
      color: color(greyDark);

      &.clear{
        background-color: transparent;
        color: color(white);
      }
    }
  }
</style>
