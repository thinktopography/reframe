import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  component: null,
  location: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.OPEN:
    return {
      component: action.component,
      location: action.location
    }

  case actionTypes.CLOSE:
    return INITIAL_STATE

  default:
    return state
  }

}