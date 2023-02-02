import { combineReducers } from 'redux'

const sampleReducer = (state = {}, action) => {
    if (!action) return state
  
    return state
  }
  
  const rootReducer = combineReducers({ sampleReducer })
  

export { rootReducer }
