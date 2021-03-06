const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function cidade(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_CIDADE':
      return { data: action.payload.data };
    default:
      return state;
  }
}

