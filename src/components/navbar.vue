<template lang='jade'>

.navbar(@mouseover='menu.visible = true' @mouseout='menu.visible = false')
  header

    ul.sunLogo
      -for(var i = 3; i--;)
        li

    h1 {{ name }}
    next-update

    paper-button(@click="open")
      span pogoda2
      span.octicon.octicon-mark-github

    paper-button(@click="openApi")
      span api
      span.octicon.octicon-mark-github

  menu(:visible='menu.visible' v-bind:routes='routes')
  paper-progress(:indeterminate='updateInProgress')

</template>

<script>
  import menu from './navbar/menu';
  import 'octicons/octicons/octicons.css';
  import nextUpdate from './navbar/nextUpdate';

  export default {
    components: {
      nextUpdate,
      menu,
    },

    props: {
      name: 'Wstaw nazwe',
      routes: [],
    },

    data() {
      return {
        updateInProgress: true,
        menu: {
          visible: true,
        },
      };
    },

    ready() {
      this.$parent.api.basic
        .on('nextUpdate', time => {
          this.updateInProgress = false;
          setTimeout(_ => this.updateInProgress = true, time * 1000);
        });
    },

    methods: {
      open: _ => open('https://github.com/skalagi/pogoda-cli'),
      openApi: _ => open('https://github.com/skalagi/pogoda-api'),
    },
  };

</script>

<style lang='stylus'>
  @import "~styles/main"
  @import "~flexstyl/index"
  @import "~flexstyl/flex"

  sunWidth = 4em

  .navbar
    margin .5em

  paper-progress
    width 100% !important

  header
    @extend .flex, .w-around, .acenter

    background #eee
    color color
    text-shadow .05em .05em (teal + 20%)

    padding .5em 1em

    > span
      margin auto

    paper-button
      align-self flex-end
      font-weight 600

      span
        margin 0 .2em

      .octicon
        font-size 1.4em

    .sunLogo
      width 1.5em
      height sunWidth
      margin 1em
      list-style none
      animation rotation 25s ease-in-out infinite
      li
        top 0
        left 0
        width sunWidth
        height sunWidth
        opacity 0.6
        position absolute
        background #fad335
        borderRound()
        &:nth-child(1)
          transform rotate(60deg)
        &:nth-child(2)
          transform rotate(30deg)
        &:nth-child(3)
          transform rotate(0deg)
        @keyframes rotation
          0%
            transform rotate(360deg)
</style>
