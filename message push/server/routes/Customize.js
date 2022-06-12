const pipeline = []

const message = {
  data: '',
  next: '',
}

let i = 1
let time = parseInt(Math.random() * (3 - 1 + 1) + 1, 10)
pipeline.push({
  data: `这是第${i++}条消息，下一条消息需要等${time}秒`,
  next: time,
})
setInterval(() => {
  time = parseInt(Math.random() * (3 - 1 + 1) + 1, 10)
  pipeline.push({
    data: `这是第${i++}条消息，下一条消息需要等${time}秒`,
    next: time,
  })
}, time * 1000)

module.exports = (req, res) => {
  // 如果产生了消息堆积，则一次性响应
  if (pipeline.length > 1) {
    res.send({
      data: pipeline.map(({ data }) => data),
      next: pipeline.at(-1).next,
    })
    pipeline.length = 0
    return
  }

  // 如果没有消息
  if (pipeline.length <= 0) {
    res.send({
      data: '没有消息，1秒后再请求',
      next: 1,
    })
    return
  }

  res.send(pipeline.pop())
}
