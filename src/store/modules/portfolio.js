const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, stockName, quantity, stockPrice }) {
    // eslint-disable-next-line prettier/prettier
    const record = state.stocks.find((stock) => stock.id === stockId);
    if (record) {
      record.quantity += quantity;
    }
    state.stocks.push({
      id: stockId,
      quantity,
      name: stockName
    });
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    // eslint-disable-next-line prettier/prettier
    const record = state.stocks.find((stock) => stock.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
      return;
    }
    state.stocks.splice(state.stocks.indexOf(record), 1);
    state.funds += stockPrice * quantity;
  },
  SET_PORTFOLIO(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    // eslint-disable-next-line prettier/prettier
    return state.stocks.map((stock) => {
      // eslint-disable-next-line prettier/prettier
      const record = getters.stocks.find((element) => stock.id === element.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: stock.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
