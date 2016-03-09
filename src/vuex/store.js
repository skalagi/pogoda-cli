import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  api: {
    basic: { },
  },
};

const mutations = {
  updateBasicApi(state, api) {
    state.api.basic = api;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
