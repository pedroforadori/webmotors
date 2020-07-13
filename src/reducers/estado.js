const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function estado(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_ESTADO':
      return { data: action.payload.data };
    default:
      return state;
  }
}

