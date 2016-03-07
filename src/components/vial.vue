<template lang='jade'>

.vial
  .measure
    -for(var i = 20; i--;)
      -if(i % 5 == 0 && i != 0)
        div.line.boldLine
      -else
        .line
  .vialVal
    .rainVal(style='height: 10%')

</template>

<style lang='stylus'>
  @import "~styles/main"
  @import "~flexstyl/index"

  .vial
    @extend .blockShadow, .flex, .center
    width 6em
    height 24em
    background #fff
    position relative
    border-radius 0 0 5em 5em
    .measure
      top 2.5%
      height 85%
      position absolute
      @extend .flex, .fcolumn, .between
      .line
        height .11em
        margin-left .1em
        width 1em
        background #555
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
        background #09f
        height 50%
        width 100%
        @extend .blockShadow
</style>
