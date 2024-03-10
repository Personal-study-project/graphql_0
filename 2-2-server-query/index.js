const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        teams: [Team]
        equipments: [Equipments]
        supplies: [Supplies]
    }
    type Team {
        id: Int
        manager: String
        office: String
        extension_number: String
        mascot: String
        cleaning_duty: String
        project: String
    }
    type Equipments {
      id: String
      used_by: String
      count: Int
      new_or_used: String
    }
    type Supplies {
      id: String
      team: Int
    }
`
const resolvers = {
  Query: {
    teams: () => database.teams,
    equipments: () => database.equipments,
    supplies: () => database.supplies
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`)
})