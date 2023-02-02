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
  
  const composeEnhancers = isDebug
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose
  
  const epicMiddleware = createEpicMiddleware()
  
  const loggerMiddleware = createLogger()
  
  const enhancers = isDebug
    ? applyMiddleware(epicMiddleware, thunkMiddleware, loggerMiddleware)
    : applyMiddleware(epicMiddleware, thunkMiddleware)
  
  const store = createStore(rootReducer, composeEnhancers(enhancers))
  
  export { store }
  