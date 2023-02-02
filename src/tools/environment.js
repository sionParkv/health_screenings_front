const isDebug = process.env.NODE_ENV !== 'production' ? true : false

const h = window.location.href
const l = h.indexOf('localhost') > -1 || h.indexOf('192.168.10.') > -1
const isLocal = l ? true : false

export { isDebug, isLocal }
