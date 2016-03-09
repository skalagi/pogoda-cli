<template lang='jade'>

.forecast
  div(v-if='populated')
    forecast-icons(:days='week' v-bind:focused.sync='focused')

    .peroid(v-for='forecast in week' v-show='focused == $index')

      .title
        img(:src='forecast.icon_url')
        h1 {{ forecast.title | shortWeek }}

      p {{ forecast.fcttext_metric }}

    .arrows
      paper-button(@transitionend='changeForecast(-1)' v-show='near.yesterday').
        {{ near.yesterday.title | shortWeek }}

      paper-button(@transitionend='changeForecast(1)' v-show='near.tomorrow').
        {{ near.tomorrow.title | shortWeek }}

    .update(v-show='update')
      span.name prognoza
      span dane z {{ update }}

  .spinner(v-else)
    paper-spinner(:active='!populated')

</template>

<style lang='stylus' src='./style/forecast'></style>

<script>
  import { api } from '../config';
  import shortWeek from './forecast/shortWeek';
  import forecastIcons from './forecast/icons';

  export default {
    components: {
      forecastIcons,
    },

    data() {
      return {
        focused: 0,
        week: false,
        update: false,
        simple: false,
        populated: false,
        ripple: false,
      };
    },

    methods: {
      changeForecast(howMuch) {
        let inRange = howMuch == 1
          ? this.focused != this.week.length - 1
          : this.focused > 0;

        if (this.ripple && inRange)
          this.focused += howMuch;

        this.ripple = !this.ripple;
      },
    },

    filters: {
      shortWeek,
    },

    computed: {
      near() {
        let focus = this.focused;
        let tomorrow = this.week[focus + 1];

        return {
          tomorrow: tomorrow ?
            tomorrow : false,

          yesterday: focus > 0 ?
            this.week[focus - 1] : false,
        };
      },
    },

    ready() {
      fetch(`${api()}/wu/forecast.json`)
        .then(res => res.json())
        .then(res => {
          let forecast = res.forecast;
          let week = forecast.txt_forecast;

          this.populated = true;

          Object.assign(this, {
            update: week.date,
            week: week.forecastday,
            simple: forecast.simpleforecast.forecastday,
          });
        });
    },
  };

</script>
