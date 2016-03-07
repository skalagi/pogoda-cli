<template lang='jade'>

.icons
  .icon(v-for='forecast in days' @click="focused = $index")
    p(:class="{ active: focused == $index }") {{ $index | weekDay }}
    img(:src='forecast.icon_url')
    paper-tooltip(position='top') {{ forecast.title | shortWeek }}

</template>

<script>
import weekDay from './weekDay';
import shortWeek from './shortWeek';

export default {
  filters: {
    shortWeek,
    weekDay,
  },

  props: {
    days: [],
    focused: Number,
  },
};

</script>

<style lang='stylus'>
@import '~styles/main'
@import '~flexstyl/index'

.icons
  @extend .flex, .between
  margin-top .5em
  .icon
    cursor pointer

    p
      margin 0
      color #777
      font-weight 600

      &.active
        color color

    img
      width 1.75em
      transition .25s

      &:hover
        transform scale(1.25)

</style>
