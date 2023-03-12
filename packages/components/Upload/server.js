const http = require('http')
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.end(JSON.stringify({
    msg: 'connet successful',
    code: 200,
  }))
})
server.listen(3500, () => {
  // eslint-disable-next-line no-console
  console.log('the server is running at 3500')
})
