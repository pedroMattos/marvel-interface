const initialState = {
  data: null,
  defaultAgent: null
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return { ...state, data: action.payload }
    case 'CREATE_DEFAULT_AGENT':
      return { ...state, defaultAgent: action.payload }
    default:
      return state
  }
}

export default dataReducer