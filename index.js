const { send } = require('micro')
const isMatch = require('is-match')

function ipfilter(options, handler) {
  const matcher = isMatch(options.filter)

  return (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

    if (!matcher(ip)) {
      send(res, 403, '403 Forbidden')
      return
    }

    return handler(req, res)
  }
}

module.exports = ipfilter
