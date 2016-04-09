<template lang='jade'>

.charts
  .choice
    date-picker(
        v-bind:time.sync='picker.date'
        v-bind:option='picker.option'
      )
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
import datePicker from 'vue-datepicker'
import months from 'months';
import { api } from 'config';

export default {
  components: {
    datePicker,
  },

  watch: {
    'picker.date': function(time) {
      this.load(time);
    },
  },

  data() {
    return {
      picker: {
        date: '',
        option: {
          type: 'day',
          format:'YYYY-MM-DD',
          month: months,
          week: require('week-days'),
          placeholder: 'wybierz datę',
          buttons : {
            ok : 'pokaż',
            cancel : 'anuluj'
          },
        },
      },

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

  computed: {
    title() {
      const date = this.picker.date;
      if (date) {
        const dateParts = date.split('-');

        switch(this.selected.purview) {
          case 'day': return date;
          case 'month': return `${months[+dateParts[1] - 1]} ${dateParts[0]}`;
          case 'year': return dateParts[0];
          default: return 'bład';
        }
      } else return '';
    },
  },

  methods: {
    findByValue(object, value) {
      for (const key of object)
        if (key.value === value) return key;
    },

    load() {
      const type = this.findByValue(this.options, this.selected.type);
      const purview = this.findByValue(this.purview, this.selected.purview);

      fetch(`${api()}/${purview.value}-charts/${type.value}.json${this.picker.date ? '?date=' + this.picker.date : ''}`)
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

          title: { text: this.title },

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

  select, input
    margin 1em

  .chart
    padding 2em
    background #fff
    box-sizing border-box
    box-shadow 0 .1em .2em rgba(#222, .5)
</style>
