import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './component'

import { log } from './tools'

let env = process.env.NODE_ENV.replace(/\b[a-z]/, (c) => c.toUpperCase())
env += ' Environment'
log.debug(`${'='.repeat(env.length)}\n${env}\n${'-'.repeat(env.length)}`)



createRoot(document.getElementById('root')).render(<App />)

