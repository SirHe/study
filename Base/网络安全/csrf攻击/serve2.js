/**
 * 用户登录之后，返回登录标识 cookie
 */

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fs = require('fs')

//将参数转换成对象
app.use(bodyParser.urlencoded({ extended: true }))
//req.cookie[xxx] 获取cookie
app.use(cookieParser())
app.use('/', express.static(path.join(__dirname, './public')))

app.listen(3002)
