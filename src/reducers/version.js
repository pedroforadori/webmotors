const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
  }
  
  export default function version(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'GET_VERSION':
        return { data: action.payload.data }
      default:
        return state;
    }
  }