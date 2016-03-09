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
        measure: {
          from: 960,
          unit: 40,
        },
      };
    },

    vuex: {
      getters: {
        pressure: ({ api }) => api.basic.barometer ? api.basic.barometer.current.value : 960,
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
