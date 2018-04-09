import express from 'express'

const GRAPHQL_PORT = 3000
const graphQLServer = express()

// Static assets (the json files supplied for the example).
graphQLServer.use('/static', express.static('static'))

module.exports = graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
)
