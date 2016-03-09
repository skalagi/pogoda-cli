<template lang='jade'>

.compass
  measure(:values='directions' v-bind:options='{ range: 0, start: 0 }')
  .arrowWrapper
    .arrow(:style='arrowDirection')
    .screen
      slot
        h1(v-show='direction != null') {{ direction | round 2 }}°
      slot(name='screen')

</template>

<script>
  import round from 'vue-round-filter';
  import measure from './measure';

  export default {
    props: {
      title: '',
      direction: null,
    },

    data() {
      return {
        directions: ['pn', 'wsch', 'pd', 'zach'],
      };
    },

    components: {
      measure,
    },

    filters: {
      round,
    },

    computed: {
      arrowDirection() {
        return {
          transform: `rotate(${this.direction + 45}deg)`,
          borderRadius: this.direction == null ? '50%' : null,
        };
      },
    },
  };

</script>

<style lang='stylus'>
  @import "~styles/main"
  @import "~flexstyl/index"

  .compass
    @extend .flex, .center
    margin 1.1em
    width 13em
    height @width
    background color
    position relative
    border-radius 50%

    .measureDot
      position absolute
      top 0; left @top
      height 13em
      width @height
      z-index 1

    .arrowWrapper
      width 85%
      height 85%
      position relative

      .arrow
        box-sizing border-box

        width 100%
        height 100%

        background #fff
        position relative
        border .4em solid
        transform rotate(45deg)
        border-radius 0 50% 50% 50%

      .screen
        @extend .flex, .center, .fcolumn
        position absolute

        arrow = -20%
        top -(arrow / 2)
        left -(arrow / 2)
        width 100% + arrow
        height 100% + arrow

        h1
          cursor help

</style>
