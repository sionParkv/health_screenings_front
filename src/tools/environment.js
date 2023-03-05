/**
 * 디버그 모드(개발환경) 여부
 */
const isDebug = process.env.NODE_ENV !== 'production' ? true : false

const h = window.location.href
const l = h.indexOf('192.168.1.18') > -1 || h.indexOf('192.168.1.') > -1

/**
 * 로컬 환경인지 여부
 */
const isLocal = l ? true : false

export { isDebug, isLocal }
