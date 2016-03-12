<template lang='jade'>
.subscription
  .email
    h1 subskrypcja pocztowa
    input
    button
</template>

<style lang='stylus'>
@import '~styles/section'
@import '~flexstyl/flex'

.subscription
  position fixed
  height 100vh
  width 100vw
  z-index 2
  left 0
  top 0

  .email
    flex styl
    flex column

    bottom 2em
    left @bottom
    position absolute

    padding 1.5em
    @extend .section
    border-radius .5em
    border .15em solid rgb(91, 193, 59)

    input
      box-shadow 0 .2em .25em rgba(#000, .5)
      border-radius .2em
      padding .5em .75em
      font-weight 600
      outline none
      color #333
      border 0
</style>
