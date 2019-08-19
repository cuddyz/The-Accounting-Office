<template>
  <article>
    <section class="banner flex flex-center">
      <div class="overlay" />
      <div class="text-center color-white relative">
        <p>About</p>
        <h2>Accounting. Anywhere.</h2>
      </div>
    </section>
    <section class="statement flex justify-center">
      <div class="flex-1 flex column flex-center">
        <h3 class="pb-1">Our Vision</h3>
        <p>We know how to stand out from your competitors and we gladly provide our clients with various keys to achieve their goals and become successful member of business environment.</p>
      </div>
      <div class="flex-1 flex column flex-center">
        <h3 class="pb-1">Our Mission</h3>
        <p>Our company strives to build a competitive advantage at each stage of the business management process in order to generate superior long-term returns, while continuously focusing on protecting investor capital.</p>
      </div>
    </section>
    <section class="details">
      <div class="flex-1 flex column flex-center">
        <blockquote><span class="bold large">WE</span> sweat the details. So <span class="bold large">YOU</span> don't have to.</blockquote>
      </div>
      <div>
        <img src="/images/Details.jpg" />
      </div>
    </section>
    <features />
    <section class="team">
      <div class="overlay" />
      <div class="flex column justify-center p-2">
        <h3>Powered by our amazing team.</h3>
        <button @click="$router.push('/team')" class="p-1">Meet the Team</button>
      </div>
    </section>
  </article>
</template>

<script>
import Features from '@/components/Features'

export default {
  name: 'AboutPage',
  components: {
    Features
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  .banner {
    height: 60vh;
    max-height: 60vh;
    padding: 2rem 0 0 2rem;
    margin-top: 5rem;

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
      font-size: 1.5em;

      @media (min-width: breaks(phablet)) {
        font-size: 1.8em;
      }
    }

    h2 {
      font-size: 2.3em;

      @media (min-width: breaks(phablet)) {
        font-size: 3em;
      }
    }
  }

  .statement {
    padding: 3rem 0;
    align-items: flex-start;
    background-color: color(white);
    flex-direction: column;

    @media (min-width: breaks(small-laptop)) {
      flex-direction: row;
    }

    @media (min-width: breaks(desktop)) {
      padding: 5rem 0;
    }

    > div{
      padding: 2rem;

      @media (min-width: breaks(phablet)) {
        padding: 2rem 5rem;
      }

      @media (min-width: breaks(small-laptop)) {
        padding: 0 2rem;
      }

      @media (min-width: breaks(laptop)) {
        padding: 0 3rem;
      }

      @media (min-width: breaks(desktop)) {
        padding: 0 5rem;
      }

      h3 {
        align-self: center;
        font-size: 1.5em;

        @media (min-width: breaks(small-laptop)) {
          align-self: flex-start;
        }

        @media (min-width: breaks(laptop)) {
          font-size: 2em;
        }
      }

      p {
        font-size: 1.1em;

        @media (min-width: breaks(laptop)) {
          font-size: 1.4em;
        }
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;

    @media (min-width: breaks(phablet)) {
      flex-direction: row;
      padding-top: 0;
    }

    img {
      max-height: 50vh;

      @media (min-width: breaks(phablet)) {
        max-height: 60vh;
      }

      @media (min-width: breaks(small-tablet)) {
        max-height: 75vh;
      }

      @media (min-width: breaks(small-laptop)) {
        max-height: 100vh;
      }
    }

    blockquote {
      font-size: 1em;
      display: block;
      border-width: 2px 0;
      border-style: solid;
      border-color: color(greyDark);
      color: color(greyDark);
      padding: 1rem;
      margin: 1rem;
      position: relative;

      @media (min-width: breaks(phone)) {
        font-size: 1.2em;
      }

      @media (min-width: breaks(phablet)) {
        font-size: 1.5em;
      }

      @media (min-width: breaks(tablet)) {
        padding: 2rem;
        font-size: 2em;
      }
    }

    blockquote:before {
      content: '\201C';
      position: absolute;
      top: 0em;
      left: 50%;
      transform: translate(-50%, -50%);
      background: color(greyVLight);
      width: 3rem;
      height: 2rem;
      font: 4em/0.9em 'PT Sans', sans-serif;
      color: color(greyDark);
      text-align: center;
    }
  }

  .team {
    background-image: url('/images/Team.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 60vh;
    position: relative;

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

    > div:nth-child(2) {
      height: 60vh;
      text-align: center;
      position: relative;

      @media (min-width: breaks(phablet)) {
        width: 40vw;
        margin-left: 5rem;
      }

      h3 {
        font-size: 2em;
        color: color(white);
        padding-bottom: 1rem;
      }

      button {
        font-size: 1.2em;
        border: 5px solid color(white);
        color: color(greyDark);
        background-color: transparent;
        color: color(white);

        &:hover {
          background-color: color(greyVLight);
          border-color: color(greyVLight);
          color: color(black);
        }
      }
    }
  }
</style>
