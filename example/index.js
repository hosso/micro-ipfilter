const ipfilter = require('micro-ipfilter')

const IP_FILTER = ['::1', '?(::ffff:)127.0.0.1', '?(::ffff:)192.168.0.*']

module.exports = ipfilter({ filter: IP_FILTER }, (req, res) => {
  res.end('Hello!')
})
