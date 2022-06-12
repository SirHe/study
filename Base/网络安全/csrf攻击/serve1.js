/**
 * 用户登录之后，返回登录标识 cookie
 */

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

//将参数转换成对象
app.use(bodyParser.urlencoded({ extended: true }))
//req.cookie[xxx] 获取cookie
app.use(cookieParser())

app.get('/', (req, res) => {
  res.cookie('token', '123456789')
  console.log(req.cookies)
  res.send('ok')
})

app.listen(3001)
