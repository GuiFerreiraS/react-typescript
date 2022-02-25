const {
  graphql,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const AlunoType = new GraphQLObjectType({
  name: 'Aluno',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    photo_url: { type: GraphQLString },
    review: { type: GraphQLString },
  }),
});

module.exports = AlunoType;
