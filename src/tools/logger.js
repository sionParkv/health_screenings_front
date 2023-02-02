import { isDebug } from './'

const log = {
  debug: function () {
    if (!isDebug) return

    for (const a in arguments) {
      console.debug(arguments[a])
    }
  },
  error: function () {
    for (const a in arguments) {
      console.error(arguments[a])
    }

    if (isDebug) {
      console.trace()
    }
  },
  info: function () {
    if (!isDebug) return

    for (const a in arguments) {
      console.info(arguments[a])
    }
  },
  warn: function () {
    for (const a in arguments) {
      console.warn(arguments[a])
    }
  },
}

export { log }
