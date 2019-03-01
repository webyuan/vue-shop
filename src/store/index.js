/*
* 最核心模块设置对象store
* */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutation';
import state from './state';

Vue.use(Vuex);
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})
