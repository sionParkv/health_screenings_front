import { isDebug } from './'

/**
 * 개발환경에서만 로그(콘솔 로그)를 출력하기 위한 로거.
 * 오류 로그(log.error())와 경고 로그(log.warn())는 운영환경에서도 로그가 출력됨.
 */
const log = {
  /**
   * 디버그 로그 출력.
   */
  debug: function () {
    if (!isDebug) return

    for (const a in arguments) {
      console.debug(arguments[a])
    }
  },
  /**
   * 오류 로그 출력.
   * 운영환경에서도 로그가 출력 됨.
   */
  error: function () {
    for (const a in arguments) {
      console.error(arguments[a])
    }

    if (isDebug) {
      console.trace()
    }
  },
  /**
   * 정보 로그 출력.
   */
  info: function () {
    if (!isDebug) return

    for (const a in arguments) {
      console.info(arguments[a])
    }
  },
  /**
   * 경고 로그 출력.
   * 운영환경에서도 로그가 출력 됨.
   */
  warn: function () {
    for (const a in arguments) {
      console.warn(arguments[a])
    }
  },
}

export { log }
