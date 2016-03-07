<template lang='jade'>

nav( v-show='visible' transition='slide' )
  button(v-for='button in buttons') {{ button }}

</template>

<script>
import slide from 'vue/transition/slide';

export default {
  transitions: {
    slide,
  },

  props: {
    visible: true,
    buttons: [],
  },
};

</script>

<style lang='stylus' scoped>
@import '~styles/main'

nav
  background #eee

  button
    margin .75em .5em
    padding .5em .75em
    border .1em solid transparent

    background transparent
    border-radius .1em
    cursor pointer
    color color

    transition 1s
    &:hover
      transition .2s
      transform scale(1.1)
      border .1em solid color
      box-shadow 0 .1em .1em rgba(#000, .15)
    &:active, &:focus
      transform scale(.95)
      outline none
</style>
