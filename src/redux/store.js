import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from './'
import { isDebug } from '../tools'

// 함수 조합을 위한 compose(개발환경에서 크롬 확장 프로그램이 설치되어 있을 경우 해당 프로그램 사용)
const composeEnhancers = isDebug
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose
// Redux observable 미들웨어 생성
const epicMiddleware = createEpicMiddleware()

// Redux 로거 미들웨어(개발환경에서만 사용)
const loggerMiddleware = createLogger()

// 미들웨어 적용
const enhancers = isDebug
  ? applyMiddleware(epicMiddleware, thunkMiddleware, loggerMiddleware)
  : applyMiddleware(epicMiddleware, thunkMiddleware)

// Redux store 생성
const store = createStore(rootReducer, composeEnhancers(enhancers))

export { store }
