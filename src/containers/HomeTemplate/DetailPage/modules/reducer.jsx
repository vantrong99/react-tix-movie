import {
  MOVIE_DETAIL_FAILED,
  MOVIE_DETAIL_SUCCESS,
  MOVIE_DETAIL_REQUEST,
} from "./constant";
let initialState = {
  loading: false,
  movieDetail: null,
  err: null,
};
const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_DETAIL_REQUEST:
      state.loading = true;
      state.movieDetail = null;
      state.err = null;
      return { ...state };
    case MOVIE_DETAIL_SUCCESS:
      state.loading = false;
      state.movieDetail = action.payload;
      state.err = null;
      return { ...state };
    case MOVIE_DETAIL_FAILED:
      state.loading = false;
      state.movieDetail = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default movieDetailReducer;
