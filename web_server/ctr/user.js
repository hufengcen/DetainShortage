import mongoose from 'mongoose'
const User = mongoose.model('User')

// 保存学生数据的方法
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

// 查询所有学生的数据
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

// 查询学生的数据以及附加数据
export const fetchUserDetail = async (ctx, next) => {

  // 利用populate来查询关联info的数据
  const users = await User.find({}).populate({
    path: 'info',
    select: 'hobby height weight'
  }).exec()

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
