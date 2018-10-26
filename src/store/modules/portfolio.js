const state = {
  funds: 10000,
  stocks: [],
}

const mutations = {
  'BUY_STOCKS': (state, { stockId, quantity, stockPrice }) => {
    const record = state.stocks.find(element => element.id === stockId)
    !!record ? record.quantity += quantity : state.stocks.push({ id: stockId, quantity })
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCKS': (state, { stockId, quantity, stockPrice }) => {
    const record = state.stocks.find(element => element.id === stockId)
    record.quantity > quantity ? record.quantity -= quantity : state.stocks.splice(state.stocks.indexOf(record), 1)
    state.funds += stockPrice * quantity
  },
  'SET_PORTFOLIO': (state, portfolio) => {
    state.funds = portfolio.funds
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
  },
}

const actions = {
  sellStock: ({ commit }, order) => {
    commit('SELL_STOCKS', order)
  },
}

const getters = {
  stockPortfolio: (state, getters) => state.stocks.map(stock => {
    const { name, price } = getters.stocks.find(element => element.id === stock.id)
    return {
      id: stock.id,
      quantity: stock.quantity,
      name,
      price,
    }
  }),
  funds: state => state.funds,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
