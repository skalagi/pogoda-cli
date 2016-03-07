<template lang='jade'>

paper-material.cloud(:style='style' elevation='2')

</template>

<script>

export default {
  data() {
    return {
      onTop: false,
      start: -200,
      speed: 10,
      height: 0,
      width: 0,

      x: 0,
      y: 0,
    };
  },

  computed: {
    style() {
      return {
        transform: `translate(${this.x}px, ${this.y}px)`,
        zIndex: this.onTop > .8 ? 2 : -1,
      };
    },
  },

  methods: {
    step() {
      this.x = this.x > window.innerWidth
        ? this.reset()
        : this.x + this.speed;

      requestAnimationFrame(this.step);
    },

    reset() {
      this.y = Math.random() * -window.innerHeight;
      this.speed = Math.random() * 1 + 1;
      this.onTop = Math.random();

      return this.start;
    },
  },

  ready() {
    this.x = Math.random() * innerWidth;
    this.reset();
    requestAnimationFrame(this.step);
  },
};

</script>

<style lang='stylus' scoped>

radius(rad)
  height rad
  width rad

.cloud
  position absolute
  border-radius 50%
  background rgba(#fff, .85)
  width 6.5em
  bottom 1em
  z-index -1
  height 5em
</style>
