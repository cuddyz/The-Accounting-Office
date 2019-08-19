<template>
  <section>
    <div class="flex flex-1">
      <TechnologySVG class="pr-1" />
      <div>
        <h4>Technology</h4>
        <p>We use innovative techology to provide solutions</p>
      </div>
    </div>
    <div class="flex flex-1">
      <ClockSVG class="pr-1" />
      <div>
        <h4>24-Hour Support</h4>
        <p>We provide support around the clock</p>
      </div>
    </div>
    <div class="flex flex-1">
      <ChartsSVG class="pr-1" />
      <div>
        <h4>Analytics</h4>
        <p>Smart analytics help empower your business</p>
      </div>
    </div>
    <div class="flex flex-1">
      <ResearchSVG class="pr-1" />
      <div>
        <h4>Market Research</h4>
        <p>Thousands of hours of market research at your finger tips</p>
      </div>
    </div>
    <div class="flex flex-1">
      <PercisionSVG class="pr-1" />
      <div>
        <h4>Decision Making</h4>
        <p>Percision decision making helps you never miss an opportunity</p>
      </div>
    </div>
    <div class="flex flex-1">
      <MoneySVG class="pr-1" />
      <div>
        <h4>Affordable</h4>
        <p>Affordable pricing to help you get your business off the ground</p>
      </div>
    </div>
  </section>
</template>

<script>
import TechnologySVG from '~/assets/icons/technology.svg'
import ClockSVG from '~/assets/icons/clock.svg'
import ChartsSVG from '~/assets/icons/charts.svg'
import ResearchSVG from '~/assets/icons/research.svg'
import PercisionSVG from '~/assets/icons/percision.svg'
import MoneySVG from '~/assets/icons/money.svg'
export default {
  name: 'Features',
  components: {
    TechnologySVG,
    ClockSVG,
    ChartsSVG,
    ResearchSVG,
    PercisionSVG,
    MoneySVG
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  section {
    background-color: color(white);
    display: grid;
    grid-gap: 3rem;
    padding: 5rem 2rem;
    grid-template-columns: 1fr;

    @media (min-width: breaks(phone)) {
      padding: 5rem 3rem;
    }

    @media (min-width: breaks(phablet)) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: breaks(laptop)) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    > div {
      align-items: flex-start;
    }
  }
  svg {
    height: 4rem;
    width: 4rem;

    @media (min-width: breaks(phablet)) {
      height: 5rem;
      width: 5rem;
    }
  }

  h4 {
    font-size: 1em;
    padding-bottom: 0.25rem;

    @media (min-width: breaks(phablet)) {
      font-size: 1.2em;
      padding-bottom: 0.5rem;
    }
  }
</style>
