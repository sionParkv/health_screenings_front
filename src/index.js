import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './component'
import './assets/styles'
import { log } from './tools'

// 개발환경에서만 실행환경 로그 출력

let env = process.env.NODE_ENV.replace(/\b[a-z]/, (c) => c.toUpperCase())
env += ' Environment'
log.debug(`${'='.repeat(env.length)}\n${env}\n${'-'.repeat(env.length)}`)

createRoot(document.getElementById('root')).render(<App />)
