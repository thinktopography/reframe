export const INITIAL_STATE = {
  panels: [],
  results: {}
}

const change = (state, action) => ({
  ...state,
  results: {
    ...state.results,
    [action.name]: action.value
  }
})

const addPanel = (state, action) => ({
  ...state,
  panels: [
    ...state.panels,
    action.panel
  ]
})

const removePanel = (state, action) => ({
  ...state,
  panels: state.panels.slice(0, state.panels - 1)
})

const reset = (state, action) => ({
  ...state,
  results: INITIAL_STATE.results
})

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'CHANGE':
    return change(state, action)

  case 'ADD_PANEL':
    return addPanel(state, action)

  case 'REMOVE_PANEL':
    return removePanel(state, action)

  case 'RESET':
    return reset(state, action)

  default:
    return state

  }
}

export default reducer
