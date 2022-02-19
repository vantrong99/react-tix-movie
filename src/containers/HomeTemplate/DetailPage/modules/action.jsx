import axios from "axios";
import {
  MOVIE_DETAIL_FAILED,
  MOVIE_DETAIL_SUCCESS,
  MOVIE_DETAIL_REQUEST,
} from "./constant";

export const actMovieDetailApi = (maPhim) => {
  return (dispatch) => {
    dispatch(actMovieDetailRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actMovieDetailSuccess(result.data));
        // console.log(result.data);
      })
      .catch((err) => {
        dispatch(actMovieDetailFailed(err));
        console.log(err);
      });
  };
};
export const actMovieDetailRequest = () => {
  return {
    type: MOVIE_DETAIL_REQUEST,
  };
};
export const actMovieDetailSuccess = (data) => {
  return {
    type: MOVIE_DETAIL_SUCCESS,
    payload: data,
  };
};
export const actMovieDetailFailed = (err) => {
  return {
    type: MOVIE_DETAIL_FAILED,
    payload: err,
  };
};
