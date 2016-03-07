<template lang="jade">

span(:style='style') {{updateInfo}}

</template>

<script>
import ms from 'pretty-ms';

export default {
  data() {
    return {
      updateInfo: 'aktualizowanie',
      style: {
        color: '',
      },
    };
  },

  ready() {
    this.$parent.$parent.api.basic
      .on('nextUpdate', time => this.nextUpdate(time));

    this.$parent.$parent.api.basic
      .on('offline', ::this.offline);
  },

  methods: {
    nextUpdate(time) {
      if (time) {
        this.thread ? clearInterval(this.thread) : null;
        this.style.color = '';

        this.thread = setInterval(_ => this.parse(--time), 1000);
      } else this.offline();

      return time;
    },

    offline() {
      clearInterval(this.thread);
      this.updateInfo = 'Stacja jest offline';
      this.style.color = 'red';
    },

    parse(time) {
      if (time == 260) {
        this.updateInfo = `aktualizacja za 4:20`;
        return time;
      }

      this.updateInfo = time > 0
        ? `aktualizacja za ${ ms(time * 1000) }`
        : `aktualizowanie w trakcie ${time ? `(${ms(-time * 1000)})` : ''}`;
    },
  },
};

</script>
