import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    loadData: ({ commit }) => {
      Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
          if (!!data) {
            const { funds, stockPortfolio, stocks } = data
            const portfolio = {
              stockPortfolio,
              funds,
            }

            commit('SET_STOCKS', stocks)
            commit('SET_PORTFOLIO', portfolio)
          }
        })
    },
  },
  getters: {},
  modules: {
    stocks,
    portfolio
  }
})
