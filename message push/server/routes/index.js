var express = require('express')
var router = express.Router()

const sse = require('./SSE')
const websocket = require('./WebSocket')
const customize = require('./Customize')

const cdnRouter = require('./CDN')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/serve/sse', sse)
router.get('/serve/customize', customize)

router.get('/cdn', cdnRouter)

module.exports = router
