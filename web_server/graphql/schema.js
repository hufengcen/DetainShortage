import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';
// 引入 type
import {info, infos} from './info'
import {user} from './user'

// 建立 schema
export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      infos,
      info,
      user
    }
  })
})
