import React from 'react'
import { Provider } from 'react-redux'
import { Router } from './'

import { store } from '../redux'

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export { App }
