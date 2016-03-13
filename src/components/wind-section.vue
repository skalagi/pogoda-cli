<template lang='jade'>

.windWraper
  .actionBar
    h1 Wiatr
    select(v-model='choice' v-bind:disabled='animation')
      option(selected) aktualny
      option powiew
  .wind
    compass(:direction='current.direction')
      span(slot='screen') {{ current.humanReadable }}
    gauge(:value='current.speed' unit-name='km/h')

</template>

<script>
  import compass from './compass';
  import gauge from './gauge';

  import model from './model/wind';

  export default {
    components: {
      compass,
      gauge,
    },

    data() {
      return {
        animation: false,
        choice: '',
      };
    },

    computed: {
      current() {
        switch (this.choice) {
          case 'powiew':
            return this.wind.gust;
          default:
            return this.wind.actual;
        };
      },
    },

    vuex: {
      getters: {
        wind({ api }) {
          const wind = api.basic.wind;

          return {
            actual: wind ? setWind(wind.current) : model(),
            gust: wind ? setWind(wind.gust) : model(),
          };
        },
      },
    },

    events: {
      animate(isAnimating) {
        this.animation = isAnimating;
      },
    },
  };

  function setWind(wind) {
    return {
      direction: windDirection(wind.dir.value),
      speed: wind.speed.value,
      humanReadable: wind.translated,
    };
  }

  function windDirection(fromBlow) {
    let direction = fromBlow === null ? fromBlow : fromBlow + 180;

    return direction < 360 ? direction : direction - 360;
  }

</script>

<style lang='stylus'>
  @import '~styles/main'
  @import '~flexstyl/index'
  @import '~styles/section'

  .windWraper
    @extend .section
    .wind
      @extend .flex, .acenter, .w-around
      .compass
        span
          font-weight 600
    .actionBar
      @extend .flex, .around, .acenter
      background #fff
      padding .5em 0
      h1
        margin .1em
</style>
