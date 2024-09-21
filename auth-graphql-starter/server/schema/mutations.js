const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = require("./types/user_type");
const AuthService = require("../services/auth");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  field: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        passward: { type: GraphQLString },
      },
      resolve(parentValue, { email, passward }, req) {
        return AuthService.signup({ email, passward, req });
      },
    },
  },
});

module.exports = mutation;
