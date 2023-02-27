import React from 'react'
import { Provider } from 'react-redux'
import { Router } from './'

import { store } from '../redux'

/**
 * 최상위 React Component를 제공하는 컴포넌트.
 *
 * @returns {React.Component} 최상위 컴포넌트.
 */

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export { App }
