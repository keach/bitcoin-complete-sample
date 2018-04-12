const { baseConv } = require('./base-conv')

const CHARACTERS = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

const base58Encode = (hexString) => {
  const source = new Buffer(hexString, 'hex')
  if (source.length === 0) return ''

  const buf58 = baseConv(source, 256, 58)

  const nPadding = source.findIndex(n => n !== 0)
  return CHARACTERS[0].repeat(nPadding) + buf58.map(n => CHARACTERS[n]).join('')
}

module.exports = {
  base58Encode
}