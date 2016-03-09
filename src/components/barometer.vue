<template lang="jade">
.barometer
  h1 Ciśnienie
  gauge(:measure='measure' v-bind:value='pressure' unit-name='hPa')
</template>

<script>
  import gauge from './gauge';

  export default {
    components: {
      gauge,
    },

    data() {
      return {
        pressure: 960,
        measure: {
          from: 960,
          unit: 40,
        },
      };
    },

    events: {
      updated(api) {
        this.pressure = api.barometer.current.value;
      },
    },
  };

</script>

<style lang="stylus">
@import '~styles/section'

.barometer
  @extend .section
  margin 0 .5em

</style>
