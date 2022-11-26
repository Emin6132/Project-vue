import Vue from "vue";
import Vuex from "vuex";
import TodoItem from "./modules/todos";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TodoItem,
  },
});
