<template>
  <section>
    <div class="flex flex-center pb-4">
      <div class="flex align-center flex-1 px-4">
        <TechnologySVG class="pr-1" />
        <div>
          <h4>Technology</h4>
          <p>We use innovative techology to provide solutions</p>
        </div>
      </div>
      <div class="flex align-center flex-1 px-4">
        <ClockSVG class="pr-1" />
        <div>
          <h4>24-Hour Support</h4>
          <p>We provide support around the clock</p>
        </div>
      </div>
      <div class="flex align-center flex-1 px-4">
        <ChartsSVG class="pr-1" />
        <div>
          <h4>Analytics</h4>
          <p>Smart analytics help empower your business</p>
        </div>
      </div>
    </div>
    <div class="flex flex-center">
      <div class="flex align-center flex-1 px-4">
        <ResearchSVG class="pr-1" />
        <div>
          <h4>Market Research</h4>
          <p>Thousands of hours of market research at your finger tips</p>
        </div>
      </div>
      <div class="flex align-center flex-1 px-4">
        <PercisionSVG class="pr-1" />
        <div>
          <h4>Decision Making</h4>
          <p>Percision decision making helps you never miss an opportunity</p>
        </div>
      </div>
      <div class="flex align-center flex-1 px-4">
        <MoneySVG class="pr-1" />
        <div>
          <h4>Affordable</h4>
          <p>Affordable pricing to help you get your business off the ground</p>
        </div>
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
  section {
    background-color: color(white);
  }
  svg {
    height: 5rem;
    width: 5rem;
  }

  h4 {
    font-size: 1.2em;
    padding-bottom: 0.5rem;
  }
</style>
