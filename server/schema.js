    const { gql } = require('apollo-server');

    const typeDefs = gql`
      type Query {
        allCurrency: [Currency]
        currency(name:[String]): [Currency]
      }

      type Currency {
        symbol: String
        name: String
        slug: String
        metrics: MarketData
      }

      type MarketData {
        market_data: DataMetrics
      }

      type DataMetrics {
        price_usd: Float
        price_btc: Float
        price_eth: Float
        volume_last_24_hours: Float
        real_volume_last_24_hours:Float
        volume_last_24_hours_overstatement_multiple: Float
        percent_change_usd_last_1_hour: Float
        percent_change_usd_last_24_hours: Float
        percent_change_btc_last_24_hours: Float
        percent_change_eth_last_24_hours: Float
        ohlcv_last_1_hour: LastHour
        ohlcv_last_24_hour: LastHour
      }

      type LastHour {
        open: Float
        high: Float
        low: Float
        close: Float
        volume: Float
      }
    `;

    module.exports = typeDefs;
