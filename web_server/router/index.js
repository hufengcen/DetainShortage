import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'
import {saveInfo, fetchInfo} from '../ctr/info'
import {saveUser, fetchUser, fetchUserDetail, deleteUser, updateUser} from '../ctr/user'

// 引入schema
import schema from '../graphql/schema'

const router = require('koa-router')()

router.post('/saveinfo', saveInfo)
      .get('/info', fetchInfo)
      .post('/saveUser', saveUser)
      .post('/updateUser', updateUser)
      .get('/user', fetchUser)
      .get('/userDetail/:_id', fetchUserDetail)
      .get('/deleteUser/:_id', deleteUser)
      .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
      })

router.post('/graphql', async (ctx, next) => {
        await graphqlKoa({schema: schema})(ctx, next) // 使用schema
      })
      .get('/graphql', async (ctx, next) => {
        await graphqlKoa({schema: schema})(ctx, next) // 使用schema
      })
      .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({endpointURL: '/graphql'})(ctx, next) // 重定向到graphiql路由
      })

module.exports = router
