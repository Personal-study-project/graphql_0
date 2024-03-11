const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        equipments: [Equipment]
        equipmentAdvs : [EquipmentAdvs]
        supplies: [Supply]
    }
`

module.exports = typeDefs