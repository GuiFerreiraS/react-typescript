const graphql = require('graphql');
const AlunoType = require('./TypeDefs/AlunoType');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = graphql;

const alunoData = require('../demo_data.json');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllReviews: {
      type: new GraphQLList(AlunoType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        //Acesso a um DB

        return alunoData;
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createReview: {
      type: AlunoType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        photo_url: { type: GraphQLString },
        review: { type: GraphQLString },
      },
      resolve(parent, args) {
        alunoData.push({
          id: alunoData.length + 1,
          name: args.nome,
          age: args.age,
          photo_url: args.photo_url,
          review: args.GraphQLString,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
