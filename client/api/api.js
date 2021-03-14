
const getAllCurrency = () => {
  return `
  query GetCurrency {
    allCurrency {
      name
      symbol
      slug
      metrics {
        market_data {
          price_usd
          price_btc
          price_eth
          volume_last_24_hours
          real_volume_last_24_hours
          volume_last_24_hours_overstatement_multiple
          percent_change_usd_last_1_hour
          percent_change_usd_last_24_hours
          percent_change_btc_last_24_hours
          percent_change_eth_last_24_hours
        }
      }
    }
  }
  `
}

export default getAllCurrency;
