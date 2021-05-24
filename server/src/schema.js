const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  tracksForHome:[Track!]!
}
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    legth: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
