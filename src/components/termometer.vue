<template lang='jade'>

.thermometer
  .measure
    div.line(
      v-for='n in range'
      v-bind:class='{boldLine: n % 5 == 0}')
        p(v-if='n % 5 == 0').
          {{ isPositive ? range - n : -n }}
  .sensor
    .temperatureSensor.sensorVal(:style="{background: color, color: color, height: sensorVal }")
      span {{ degrees | round 2 }}°C
        paper-tooltip {{ degrees }}°C

      .bottomColor

  .bottom

</template>

<style lang='stylus' src='./style/termometer'></style>

<script>
  import round from 'vue-round-filter';

  export default {
    props: {
      degrees: Number,
    },

    data() {
      return {
        range: 30,
      };
    },

    filters: {
      round,
    },

    computed: {
      sensorVal() {
        let percent = Math.abs(this.degrees) * 2.9;

        return `${this.isPositive ? percent + 10.5 : 97.5 - percent}%`;
      },

      isPositive() {
        return this.degrees >= 0;
      },

      color() {
        return this.degrees > 0 ? '#f42' : '#a0ccff';
      },
    },
  };

</script>
