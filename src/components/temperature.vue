<template lang='jade'>

.temperature
  h1 Temperatura
  termometer(:degrees='current')

  select(v-model='choice')
    option aktualna
    option(selected) odczuwalna

</template>

<script>

import termometer from 'vue-thermometer';

export default {
  components: {
    termometer,
  },

  data() {
    return {
      choice: '',
    };
  },

  computed: {
    current() {
      switch (this.choice) {
        case 'aktualna':
          return this.temperature.actual;
        default:
          return this.temperature.real;
      };
    },
  },

  vuex: {
    getters: {
      temperature: state => {
        let temperature = state.api.basic.temperature;

        return {
          actual: temperature ? temperature.current.value : 0,
          real: temperature ? temperature.real.value : 0,
        };
      },
    },
  },
};

</script>

<style lang='stylus'>
@import '~flexstyl/index'
@import "~styles/main"
@import "~styles/section"

.temperature
  @extend .section, .flex, .fcolumn, .acenter
  overflow hidden

  h1
    margin 0

</style>
