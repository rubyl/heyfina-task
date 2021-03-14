const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const CurrencyAPI = require('./datasources/cyto')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    currencyAPI: new CurrencyAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`GraphQL Server is running at ${url}`);
});
