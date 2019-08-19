<template>
  <section class="flex column p-2">
    <div class="flex-1 flex justify-center mb-1">
      <div class="img-container" :style="{ 'background-image': `url('images/${member.picture}'`}" :aria-label="member.name" />
    </div>
    <div class="bio flex column text-center flex-1">
      <h2 class="uppercase normal mb-50 color-grey">{{ member.name }}</h2>
      <h3 class="color-greyDark normal pb-50">{{ member.title }}</h3>
      <p class="color-grey pb-50 italic">"{{ member.slogan }}<a class="pl-25" v-if="member.link" :href="member.link" target="_blank">{{ member.link }}.</a>"</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamMember',
  props: ['member']
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  section {
    .bio {
      align-items: center;
      justify-content: flex-start;
    }

    h2 {
      font-size: 1em;
      border-bottom: 2px solid color(greyLight);
      width: 80%;

      @media (min-width: breaks(phone)) {
       font-size: 1.2em;
      }

      @media (min-width: breaks(laptop)) {
        font-size: 1.4em;
      }
    }

    h3 {
      font-size: 0.9em;

      @media (min-width: breaks(phone)) {
       font-size: 1.1em;
      }

      @media (min-width: breaks(laptop)) {
        font-size: 1.2em;
      }
    }

    p {
      font-size: 0.8em;

      @media (min-width: breaks(laptop)) {
        font-size: 1em;
      }
    }

    .img-container {
      border-radius: 50%;
      border: 5px solid color(grey);
      height: 12rem;
      width: 12rem;
      background-position: top center;
      background-size: cover;
      background-repeat: no-repeat;

      @media (min-width: breaks(phone)) {
        height: 15rem;
        width: 15rem;
      }
    }
  }
</style>
