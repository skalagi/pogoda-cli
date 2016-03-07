import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './router.config';
import weather from './weather.vue';
const Weather = Vue.extend(weather);

if (process.env.NODE_ENV != 'production')
  Vue.config.debug = true;

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
});

routerConfig(router)
  .start(Weather, '#weather');
