import Vue from 'vue'
import Vuex from 'vuex'
// import { link } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Este es un título desde vuex',
    links: ['https://www.google.com/','https://www.youtube.com/','https://www.yahoo.com/']
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK (state, lin) {
      state.links.push(lin)
    },
    REMOVE_LINK (state, lin) {
      state.links.splice(lin,1)
    }
  },
  actions: {
    removeLink (context, lin) {
      context.commit("REMOVE_LINK",lin)
    }
  }
})
