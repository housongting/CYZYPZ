'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// 开发环境变量
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://192.168.4.195:8081"'

})
