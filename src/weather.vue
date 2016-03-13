<style lang="stylus">
  @import "~styles/main"
  @import "~flexstyl/index"

  body
    margin 1em 1.5em
    overflow-x hidden
    background color
    font-family 'Rajdhani', bold, sans-serif

</style>

<template lang="jade">
.weather
  link(href='https://fonts.googleapis.com/css?family=Rajdhani:400,600&subset=latin,latin-ext' rel='stylesheet' type='text/css')
  material
  navbar(:routes="routes" name='pogoda-skalagi')
  router-view
  email-subscription

</template>

<script>
  import emailSubscription from './components/email-subscription';
  import material from './components/material';
  import navbar from './components/navbar';
  import store from './vuex/store';
  import Basic from '@pogoda/basic-api';
  import { api } from 'config';
  import 'whatwg-fetch';

  export default {
    components: {
      emailSubscription,
      material,
      navbar,
    },

    store,
    vuex: {
      actions: {
        updateApi({ dispatch }, api) {
          dispatch('updateBasicApi', api);
        },
      },
    },

    data() {
      return {
        api: {
          basic: new Basic(api()),
        },

        routes: [
          { name: 'pogoda', path: '/' },
          { name: 'wykresy (beta)', path: '/wykresy' },
        ],
      };
    },

    ready() {
      this.api.basic.on('updated', api => this.updateApi(api));
    },
  };

</script>
