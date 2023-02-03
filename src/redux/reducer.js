import { combineReducers } from 'redux'

/**
 * 오류 방지를 위한 샘플 리듀서.
 * 실제 리듀서가 하나라도 추가될 경우 제거할 예정.
 *
 * @param {redux.state} state 상태.
 * @param {redux.action} action 액션.
 * @returns {redux.state} 액션 결과가 반영된 상태.
 */

const sampleReducer = (state = {}, action) => {
  if (!action) return state

  return state
}

/**
 * 최상위 리듀서.
 */

const rootReducer = combineReducers({ sampleReducer })

export { rootReducer }
