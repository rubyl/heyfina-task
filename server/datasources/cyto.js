const { RESTDataSource } = require('apollo-datasource-rest');

class CurencyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://data.messari.io/api/v1/assets?';
  }

  currencyReducer(currency) {
    return currency.data;
  }

  async getAllCytoCurrencies() {
    const curencyResponse = await this.get(`?fields=slug,symbol,name,metrics`);
    return this.currencyReducer(curencyResponse);
  }
}

module.exports = CurencyAPI;
