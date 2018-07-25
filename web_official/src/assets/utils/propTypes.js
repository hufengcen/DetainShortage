import Vue from 'vue'
import * as ajaxService from 'ajax/restful/service'
// import * as loggerService from 'api/api-logger/logger-service'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

Vue.prototype.$ajaxApi = ajaxService

Vue.config.silent = true
Vue.config.productionTip = false
Vue.config.performance = process.env.NODE_ENV === 'development'
Vue.config.devtools = process.env.NODE_ENV === 'development'

// build打包本地压缩文件，缓存策略
OfflinePluginRuntime.install()
