module.exports = (req, res) => {
  res.header({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  })

  res.write('data: ' + new Date() + '\n\n')

  const timer = setInterval(() => {
    res.write('data: ' + new Date() + '\n\n')
  }, 1000)

  req.connection.addListener(
    'close',
    function () {
      clearInterval(timer)
      console.log('连接关闭')
    },
    false
  )
}
