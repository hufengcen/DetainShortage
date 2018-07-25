import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType,
  GraphQLInt
} from 'graphql';

import mongoose from 'mongoose'

import {InfoType} from './info'
const User = mongoose.model('User')


let UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    sex: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    info: {
      type: InfoType
    }
  }
})


export const user = {
  type: new GraphQLList(UserType),
  args: {},
  resolve (root, params, options) {
    return User.find({}).populate({
      path: 'info',
      select: 'hobby height weight'
    }).exec()
  }
}
