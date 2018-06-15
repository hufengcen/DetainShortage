# DetainShortage
protect or save shortage by translating

### 目的
```
> * 将一些有用的资源实现周边回收，或者再利用，或者互换。（资源利用这是大致方向）
```

### 版本 v1.0.0
```
> *  利用高德实现周边定位，获取应用游客位置，反馈到地图上。
> *  添加创建活动功能，在创建活动界面，可以设置活动信息，成功创建留言板，位置显示为发起人定位。
> *  发起的活动可以给附近搜索的人看到，附近的人可以加入到该活动内，加入集体聊天，并参加活动

```

### 技术栈
```
> *  主要是js, html, css方面。
> *  涉及web_server模块 需要学习node服务框架 koa, mongodb ,并且学习一些https协议方面的知识
> *  需要学习小程序的制作，获取数据方面需要学习一些ajax之类的知识，或者包装过得请求插件类似于axios
> *  移动端暂时未涉及，研究vue的同学可以往nuxt方面学习。当然用普通的mvvm框架也是可以滴
> *  前端在处理页面友好方面，建议用BundleAnalyzerPlugin，offline-plugin 之类的优化策略
> *  总的来说，多多益善

```

### 模块

```
> * web_app         移动端模块
> * web_official    官网模块
> * web_routine     小程序模块
> * web_server      服务器
```

### 界面
```
> * 界面随便什么风格都可以，简单清楚一点就可以
> * 官网就'脏'一点吧，就是立意，不用讲道理
```

### web_server      服务器
```
> * 引用koa + graphQL
> * 开发环境需要安装babel相关插件
> * 开发环境建议安装nodemon，不用一直开关服务
> * 安装mongoDB 推荐使用V3.4，下载链接http://dl.mongodb.org/dl/win32/x86_64
> * 过几天我会配置一个本地jeason-server，用于demo给大家运行

```

### 公共文件处理方式
```
> * 采用cdn方式存储文件（注意cdn缓存较大）
