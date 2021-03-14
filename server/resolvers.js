module.exports = {
  Query: {
    allCurrency: (_, {  }, { dataSources }) =>
      dataSources.currencyAPI.getAllCytoCurrencies(),
    currency: (_, {name}, { dataSources }) =>
      dataSources.currencyAPI.getCurrencyMetrics({name}),
  }
};
