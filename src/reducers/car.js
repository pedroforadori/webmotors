const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
}

export default function cars(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH_CAR':
      return { data: action.payload.data }
    default:
      return state;
  }
}