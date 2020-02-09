import Vue from "vue";
import Vuex from "vuex";
import modal from "./modules/modal";
import message from "./modules/message";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    modal,
    message
  }
  //   strict: debug,
});
