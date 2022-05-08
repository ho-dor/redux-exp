import initialState from "./state";

function reducer(state = initialState, action) {
  switch (action.type) {
    case 1:
      state = { ...state, count: state.count + 1 };
      break;
    case -1:
      state = { ...state, count: state.count - 1 };
      break;
    default:
      state = { ...state, count: state.count * 1 };
  }
  return state;
}

export default reducer;
