<template lang='jade'>

paper-material(elevation='2').gauge
  .screen
    h3 {{ value | round 2 }} {{ unitName }}
      paper-tooltip {{ value }} {{ unitName }}
  .dot
    .pointer(:style='pointer')
  measure(:options='measure')

</template>

<style lang='stylus' src='./style/gauge'></style>

<script>
  import measure from './measure';
  import round from 'vue-round-filter';
  import defaultProps from './model/gauge';
  import dynamic from 'dynamics.js';

  export default {
    props: {
      value: Number,
      unitName: '',
      measure: {
        default: defaultProps,
        coerce: function(val) {
          return defaultProps(val);
        },
      },
    },

    data() {
      return {
        animation: false,
      };
    },

    ready() {
      this.$watch('value', this.animate);
    },

    filters: {
      round,
    },

    components: {
      measure,
    },

    methods: {
      animate(value, prev) {
        if (!this.animation) {
          this.$dispatch('animate', this.animation = true);
          this.value = prev;

          dynamic.animate(this, {
            value,
          }, {
            type: dynamic.spring,
            duration: 2000,
            friction: 300,
            delay: 250,
            complete: _ => this.$dispatch('animate', this.animation = false),
          });
        }
      },
    },

    computed: {
      measureSpace() {
        return 270 / (this.measure.range - 1);
      },

      pointer() {
        return { transform: `rotate(${41 + (this.value - this.measure.from) * this.measureSpace / this.measure.unit}deg)` };
      },
    },
  };

</script>
