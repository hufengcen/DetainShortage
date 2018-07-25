// 引入mongoose模块
import mongoose from 'mongoose'
import config from '../config'

// 同步引入 info model和 user model
require('./schema/info')
require('./schema/user')

// 链接mongodb
export const database = () => {
  mongoose.set('debug', true)

  mongoose.connect(config.dbPath)

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.dbPath)
  })
  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB ', config.dbPath)
  })
}
