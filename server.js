import express from 'express'

const PORT = 3000
const server = express()

module.exports = server.listen(PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${PORT}/graphiql`
  )
)
