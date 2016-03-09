<template lang='jade'>

.charts
  h1 Wykresy w budowie!

  .chart(v-el:chart)

  select(v-model='period' @change='load')
    option(selected) day
    option month
    option year

  select(v-model='selected' @change='load')
    option(selected) outTemp
    option outHumidity
    option barometer
    option windGust
    option windGustDir
    option rain

</template>

<script>
import Highchart from 'highcharts';
import { api } from '../config';

export default {
  data() {
    return {
      period: null,
      selected: null,
    };
  },

  methods: {
    load() {
      fetch(`${api()}/${this.period}-charts/${this.selected}.json`)
        .then(res => res.json())
        .then(data => new Highchart.chart(this.$els.chart, {
          series: [{
            data,
          }],
          xAxis: {
            type: 'datetime'
          },
          chart: {
            type: 'line',
          },
          title: {
            text: `${this.period} - ${this.selected}`,
          },
        }))
        .catch(err => console.log(err));
    },
  },

  ready() {
    this.load();
  },
};

</script>

<style lang='stylus'>
.charts
  text-align center

  select
    margin 1em
</style>
