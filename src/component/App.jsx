import React from 'react'
import { Provider } from 'react-redux'

import { store } from '../redux'

const App = () => (
  <Provider store={store}>
    <>명지병원 건강검진 서비스</>
  </Provider>
)

export { App }
