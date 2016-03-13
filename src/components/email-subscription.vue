<template lang='jade'>
.subscription
  button(v-show='!active' @click.prevent='active = true') +
  form(v-el:form v-show='active' v-on:submit.prevent="subscription").email
    h1 Subskrypcja pocztowa
    h2(v-show='status') Udało się
    input(name='email' type='email' @keyup='status = null')
    .buttons
      paper-button(raised @click.prevent='active = false') nie dziękuje
      paper-button(raised) Subskrybuj
</template>

<script>
import config from 'config';

export default {
  methods: {
    subscription() {
      fetch(`${config.api.source}/subscribe`, {
        method: 'post',
        body: new FormData(this.$els.form),
      }).then(res => {
        const status = res.json().status;

        this.status = status === 'Added.' || status === 'Removed.';
      });
    },
  },

  data() {
    return {
      active: true,
      status: null,
    };
  },
};

</script>

<style lang='stylus'>
@import '~styles/section'
@import '~flexstyl/flex'

.subscription
  pointer-events none
  position fixed
  height 100vh
  width 100vw
  z-index 2
  left 0
  top 0

  & > *
    pointer-events all

  .email
    flex styl
    flex column

    bottom 2em
    left @bottom
    position absolute

    @extend .section
    border-radius .5em

    h1
      margin .5em .25em
      margin-top 0

    input
      box-shadow 0 .2em .25em rgba(#000, .5)
      border-radius .2em
      padding .75em
      margin 0 1.75em
      font-weight 600
      outline none
      color #333
      border 0

    .buttons
      flex styl
      margin .5em 0
      justify around

      paper-button
        font-weight 600
        background #fff
        margin .5em 0

  & > button
    position absolute
    bottom 1em
    left 1em

    cursor pointer
    border 0
    background #fff
    font-size 1.5em
    padding .5em
    width 2em
    border-radius 50%
    color #222
    box-shadow 0 .1em .2em rgba(#333, .3)
</style>
