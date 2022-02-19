import { ACCOUT_FAILED, ACCOUT_REQUEST, ACCOUT_SUCCESS } from "./constant";
let initialState = {
  loading: false,
  data: null,
  err: null,
};
const accoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUT_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ACCOUT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ACCOUT_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default accoutReducer;
