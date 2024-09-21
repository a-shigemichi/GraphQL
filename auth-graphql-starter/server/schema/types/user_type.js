const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  field: {
    email: { type: GraphQLString },
  },
});

module.exports = UserType;
