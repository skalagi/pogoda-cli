<template lang='jade'>

.cloud(:style='style' elevation='2')

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
  border-radius 4em
  background #fff
  opacity .9
  width 9em
  bottom 1em
  z-index -1
  height 3em

  &:before, &:after
    content ''
    position absolute
    border-radius 50%
    background inherit

  &:before
    top -1.5em
    left 1em
    width 3em
    height @width

  &:after
    top -2.5em
    left 3em
    width 4.75em
    height @width

</style>
