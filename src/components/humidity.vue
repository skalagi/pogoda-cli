<template lang="jade">
.dropletWrapper(v-show='humidity != null')
  .droplet
    .humidity
      .sensor(:style='{ height: humidity + "%" }')
        .overlay
          h2 Wilgotność
          h1 {{ humidity | round 2 }}%
      .screen
        h2 Wilgotność
        h1 {{ humidity | round 2 }}%
</template>

<script>
  import round from 'vue-round-filter';

  export default {
    data() {
      return {
        humidity: 0,
      };
    },

    filters: {
      round,
    },

    events: {
      updated(api) {
        this.humidity = api.humidity.value;
      },
    },
  };

</script>

<style lang="stylus">
@import '~styles/section'
@import '~flexstyl/index'

.dropletWrapper
  transform scaleY(.9) scaleX(.8)

  .droplet
    margin 2em
    width 8em
    height 8em
    transform rotate(45deg)
    border-radius 0 50% 50% 50%
    border .5em solid #eee
    overflow hidden

.humidity
  @extend .section
  position relative
  shadow 0
  height 105%
  transform rotate(-45deg)
  top -1.6em; left -.7em
  background #fff
  color #fff

  h2
    margin 0
  h1
    margin 0

  .screen
    position absolute
    color color
    bottom 1.75em; left .64em

  .sensor
    width 100%
    bottom 0; left 0
    position absolute
    overflow hidden
    background color + 25%

    .overlay
      color #fff
      z-index 2
      width 100%
      bottom 1.75em; left 0
      position absolute

</style>
