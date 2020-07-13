const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
  }
  
  export default function make(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'GET_MAKE':
        return { data: action.payload.data }
      default:
        return state;
    }
  }