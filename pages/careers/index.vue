<template>
  <article>
    <section>
      <h2 class="pb-1">Interested in joining GielowKrebs Accouting?</h2>
      <h3 class="pb-1">Drop your email below and we will reach out to you the next time we are hiring!</h3>
      <input class="mb-1" type="text" placeholder="Email Address" v-model="email" />
      <button @click="submit()">Submit</button>
      <p class="mt-1" v-if="showMessage">Thank you! We will reach out to you soon!</p>
      <a class="mt-1" v-if="showLink" href="https://discord.gg/BrrjPnu" target="_blank">https://discord.gg/BrrjPnu</a>
    </section>
  </article>
</template>

<script>
export default {
  name: 'CareersPage',
  data() {
    return {
      email: '',
      showMessage: false,
      showLink: false
    }
  },
  methods: {
    submit() {
      if (this.email.toLowerCase() === 'discord') {
        this.showLink = true
        this.showMessage = false
      } else {
        this.showMessage = true
        this.showLink = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  article {
    display: grid;
    background-color: darken(color(greyVLight), 10%);
    margin: 5rem;
    border-radius: 5px;

    > section {
      margin: auto;
      text-align: center;

      input {
        line-height: 2;
      }

      button {
        font-size: 1.2em;
        border: 5px solid color(white);
        color: color(greyDark);

        &:hover {
          background-color: color(greyVLight);
          border-color: color(greyVLight);
          color: color(black);
        }
      }

      a {
        display: block;
      }
    }
  }
</style>
