<template>
  <article>
    <section class="banner flex flex-center">
      <div class="overlay" />
      <div class="text-center color-white relative">
        <p>About</p>
        <h2>Accounting. Anywhere.</h2>
      </div>
    </section>
    <section class="statement flex flex-center">
      <div class="flex-1 flex column flex-center">
        <h3 class="pb-1">Our Vision</h3>
        <p>We know how to stand out from your competitors and we gladly provide our clients with various keys to achieve their goals and become successful member of business environment.</p>
      </div>
      <div class="flex-1 flex column flex-center">
        <h3 class="pb-1">Our Mission</h3>
        <p>Our company strives to build a competitive advantage at each stage of the business management process in order to generate superior long-term returns, while continuously focusing on protecting investor capital.</p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  .banner {
    height: 60vh;
    max-height: 60vh;
    padding: 2rem 0 0 2rem;
    margin-top: 10vh;

    background: url('/images/AboutBanner.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    position: relative;

    color: color(white);

    .overlay {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      opacity: 0.5;
      background-color: color(black);
    }

    p {
      font-size: 1.8em;
    }
    h2 {
      font-size: 3em;
    }
  }

  .statement {
    padding: 5rem 0;
    > div{
      padding: 0 5rem;

      h3 {
        align-self: flex-start;
        font-size: 2em;
      }
    }
  }

</style>
