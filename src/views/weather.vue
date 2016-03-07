<style lang="stylus">
@import "~styles/main"
@import "~flexstyl/index"

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
    humidity
    temperature
    //vial
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
  import cloud from '../components/cloud';
  import vial from '../components/vial';

  export default {
    components: {
      windSection,
      temperature,
      barometer,
      humidity,
      forecast,
      cloud,
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
