import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import stocks from "./modules/stocks";
import portfolio from "./modules/portfolio";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userIsLoggedIn: false
  },
  mutations: {
    LOGIN_USER(state) {
      state.userIsLoggedIn = true;
    },
    LOGOUT_USER(state) {
      state.userIsLoggedIn = false;
    }
  },
  actions: {
    getData({ commit }) {
      axios
        .get("https://vue-stock-trader-ffe5f.firebaseio.com/data.json")
        // eslint-disable-next-line prettier/prettier
        .then(({ data }) => {
          if (data) {
            const { stocks, funds, stockPortfolio } = data;
            const portfolio = {
              stockPortfolio,
              funds
            };
            commit("SET_STOCKS", stocks);
            commit("SET_PORTFOLIO", portfolio);
          }
        });
    },
    loginUser({ commit }) {
      commit("LOGIN_USER");
    },
    logoutUser({ commit }) {
      commit("LOGOUT_USER");
    }
  },
  getters: {
    userIsLoggedIn(state) {
      return state.userIsLoggedIn;
    }
  },
  modules: {
    stocks,
    portfolio
  }
});
