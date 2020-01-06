const express = require('express')
const compression = require('compression')
// 创建服务器
const app = express()

// 一定要把该行代码写到静态资源托管之前

app.use(compression())
// 注册一个中间键,将目录托管为静态资源
app.use(express.static('./dist'))

app.listen(81, () => {
    console.log('server running at http://127.0.0.1:81');
})