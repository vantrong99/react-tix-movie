import axios from "axios";
import { ACCOUT_FAILED, ACCOUT_REQUEST, ACCOUT_SUCCESS } from "./constant";
export const actAccoutrApi = () => {
  const taiKhoan = JSON.parse(localStorage.getItem("User")).taiKhoan;
  return (dispatch) => {
    dispatch(actAccoutRequest());
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data: {
        taiKhoan: taiKhoan,
      },
    })
      .then((result) => {
        dispatch(actAccoutSuccess(result.data));
        // console.log(result.data);
      })
      .catch((err) => {
        dispatch(actAccoutFailed(err));
      });
  };
};
const actAccoutRequest = () => {
  return {
    type: ACCOUT_REQUEST,
  };
};
const actAccoutSuccess = (data) => {
  return {
    type: ACCOUT_SUCCESS,
    payload: data,
  };
};
const actAccoutFailed = (err) => {
  return {
    type: ACCOUT_FAILED,
    payload: err,
  };
};
