<template lang='jade'>

.container
  h1 Opady
  .vial
    .measure
      .line(v-for='num of 20' v-bind:class='{ boldLine: num % 5 === 0 }')
        p(v-if='num % 5 === 0') {{ 20 - num }}
    .vialVal
      .rainVal(style='height: {{ amount }}%')

</template>

<script>
  export default {
    vuex: {
      getters: {
        amount: ({ api }) => {
          let amount = api.basic.sum ? api.basic.sum.value : 0;

          return amount ? (amount * 4.8) + 5.3 : 0;
        },
      },
    },
  };
</script>

<style lang='stylus'>
  @import "~styles/main"
  @import '~styles/section'
  @import "~flexstyl/index"

  .container
    @extend .section
    overflow hidden

  .vial
    @extend .flex, .center
    width 6.5em
    height 24em
    margin .5em
    background #fff
    position relative
    border-radius 0 0 5em 5em
    &:after
      content ''
      position absolute
      pointer-events none
      top -1.9%
      left 56%
      width 110%
      height 114%
      z-index 2
      transform skew(25deg) rotate(37deg)
      background rgba(#000, .1)
    .measure
      top 2.5%
      height 85%
      position absolute
      @extend .flex, .fcolumn, .between

      .line
        height .11em
        margin-left .1em
        width 1em
        position relative
        background #555

        span
          margin 0 .25em

      .boldLine
        width 1.5em
    .vialVal
      border-radius 0 0 5em 5em
      width 90%
      height 95%
      display flex
      align-items flex-end
      overflow hidden
      border-left .1em solid #ddd
      .rainVal
        background color
        height 50%
        width 100%
        @extend .blockShadow
</style>
