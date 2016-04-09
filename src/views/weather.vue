<style lang="stylus">
@import "~styles/main"
@import "~flexstyl/index"

.clouds
  position fixed
  z-index -1
  height 100vh
  width 100vw
  top 0; left 0

main
  @extend .flex, .center, .fwrap, .around
  > *
    margin .5em
  section
    @extend .flex, .acenter, .between, .fcolumn

    .section
      @extend .flex, .acenter, .w-around
      background none
      shadow 0
      > div
        margin .5em

    > *
      margin .5em
</style>

<template lang="jade">
.weather
  main
    section
      humidity
      vial
    temperature
    section
      .section
        barometer
        forecast
      wind-section
    cloud(v-for='n in 7')
</template>

<script>
  import windSection from '../components/wind-section';
  import temperature from '../components/temperature';
  import barometer from '../components/barometer';
  import forecast from '../components/forecast';
  import humidity from '../components/humidity';
  import vial from '../components/vial';

  export default {
    components: {
      windSection,
      temperature,
      barometer,
      humidity,
      forecast,
      vial,
    },

    data() {
      return {
        env: process.env.NODE_ENV,
        api: { },
      };
    },
  };

</script>
