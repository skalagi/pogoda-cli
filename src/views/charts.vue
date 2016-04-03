<template lang='jade'>

.charts
  .select
    h4 okres:
    select(v-model='selected.purview' @change='load')
      option(v-for='opt in purview' v-bind:selected='$index === 0' v-bind:value='opt.value') {{ opt }}

  .select
    h4 typ:
    select(v-model='selected.type' @change='load')
      option(v-for='opt in options' v-bind:selected='$index === 0' v-bind:value='opt.value') {{ opt }}

  .chart(v-el:chart)
</template>

<script>
import Highchart from 'highcharts';
require('highcharts-more')(Highchart);
import { api } from 'config';

export default {
  data() {
    return {
      purview: [
        { toString: _ => 'dzień', value: 'day' },
        { toString: _ => 'miesiąc', value: 'month' },
        { toString: _ => 'rok', value: 'year' },
      ],

      selected: {
        type: '',
        purview: '',
        toString() {
          return `${this.purview} ${this.type}`;
        },
      },

      options: [
        { toString: _ => 'temperatura', y: { label: '°C' }, value: 'outTemp' },
        { toString: _ => 'wilgotność', y: { label: '%' }, value: 'outHumidity' },
        { toString: _ => 'ciśnienie', y: { label: 'hPa' }, value: 'barometer' },
        { toString: _ => 'powiewy', y: { label: 'km/h', title: 'prędkość' }, value: 'windGust' },
        { toString: _ => 'kierunek wiatru', y: { label: '°', title: 'kierunek' }, value: 'windGustDir' },
        { toString: _ => 'opady', y: { label: 'mm', title: 'suma' }, value: 'rain' },
      ],
    };
  },

  methods: {
    findByValue(object, value) {
      for (const key of object)
        if (key.value === value) return key;
    },

    load() {
      const type = this.findByValue(this.options, this.selected.type);
      const purview = this.findByValue(this.purview, this.selected.purview);

      fetch(`${api()}/${purview.value}-charts/${type.value}.json`)
        .then(res => res.json())
        .then(data => new Highchart.chart(this.$els.chart, {
          series: [
            { data, name: type },
          ],

          yAxis: {
            title: {
              text: type.y.title,
            },

            labels: {
              formatter() {
                return `${this.value} ${type.y.label}`;
              },
            },
          },

          title: { text: '' },

          xAxis: {
            type: 'datetime',
          },

          chart: {
            type: data[0].length > 2 ? 'arearange' : 'line',
          },
        }))
        .then(chart => setTimeout(_ => chart.reflow(), 1000))
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

  .select
    display inline-flex
    color #fff

  select
    margin 1em

  .chart
    padding 2em
    background #fff
    box-sizing border-box
    box-shadow 0 .1em .2em rgba(#222, .5)
</style>
