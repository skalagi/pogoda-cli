<template lang='jade'>

paper-material.windWraper
  paper-material.actionBar
    h1 Wiatr
    select(v-model='wind.choice' v-bind:disabled='animation')
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
        wind: {
          choice: '',
          actual: model(),
          gust: model(),
        },
      };
    },

    computed: {
      current() {
        switch (this.wind.choice) {
          case 'powiew':
            return this.wind.gust;
          default:
            return this.wind.actual;
        };
      },
    },

    events: {
      animate(isAnimating) {
        this.animation = isAnimating;
      },

      updated(api) {
        let wind = api.wind;

        this.setWind('actual', wind.current);
        this.setWind('gust', wind.gust);
      },
    },

    methods: {
      windDirection(fromBlow) {
        let direction = fromBlow === null ? fromBlow : fromBlow + 180;

        return direction < 360 ? direction : direction - 360;
      },

      setWind(which, wind) {
        Object.assign(this.wind[which], {
          direction: this.windDirection(wind.dir.value),
          speed: wind.speed.value,
          humanReadable: wind.translated,
        });
      },
    },
  };

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
