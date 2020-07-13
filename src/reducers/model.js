const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
  }
  
  export default function model(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'GET_MODEL':
        return { data: action.payload.data }
      default:
        return state;
    }
  }