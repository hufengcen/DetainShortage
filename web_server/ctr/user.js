import mongoose from 'mongoose'
const User = mongoose.model('User')

// 添加学生数据的方法
export const saveUser = async (ctx, next) => {
  // 获取前端请求的数据
  const opts = ctx.request.body

  const user = new User(opts)
  const saveUser = await user.save() // 保存数据

  if (saveUser) {
    ctx.body = {
      success: true,
      user: saveUser
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

// 查询所有用户的数据
export const fetchUser = async (ctx, next) => {
  const users = await User.find({})

  if (users.length) {
    ctx.body = {
      success: true,
      user: users
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

// 更新用户数据
export const updateUser = async (ctx, next) => {
  const opts = ctx.request.body
  // const params = ctx.querystring
  await User.update({'_id': opts.id}, { $set: {
    nickname: opts.nick_name,
    realname: opts.realname,
    single: opts.single,
    icardCode: opts.icardCode
  }}, (err, res) => {
    if (err) {
      ctx.body = {
        success: false
      }
    } else {
      ctx.body = {
        success: true
      }
    }
  })
}

// 根据id查询用户的数据
export const fetchUserDetail = async (ctx, next) => {
  const params = ctx.params
  // const params = ctx.querystring
  const users = await User.find({'_id': params._id})

  if (users.length) {
    ctx.body = {
      success: true,
      user: users
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

// 根据id删除用户数据
export const deleteUser = async (ctx, next) => {
  const params = ctx.params
  // const params = ctx.querystring
  await User.remove({'_id': params._id}, (err, res) => {
    if (err) {
      ctx.body = {
        success: false
      }
    } else {
      ctx.body = {
        success: true
      }
    }
  })
}
