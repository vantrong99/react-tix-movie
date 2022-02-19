import axios from "axios";
import Swal from "sweetalert2";
import {
  AUTH_PAGE_FAILED,
  AUTH_PAGE_REQUEST,
  AUTH_PAGE_SUCCESS,
} from "./constant";

export const actAuthApi = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        localStorage.setItem("User", JSON.stringify(result.data));
        dispatch(actAuthSuccess(result.data));
        alert("Đăng nhập thành công !");
        history.push("/");
      })
      .catch((err) => {
        // console.log(err);
        dispatch(actAuthFailed(err));
      });
  };
};

export const actAuthRequest = () => {
  return {
    type: AUTH_PAGE_REQUEST,
  };
};
export const actAuthSuccess = (data) => {
  return {
    type: AUTH_PAGE_SUCCESS,
    payload: data,
  };
};
export const actAuthFailed = (err) => {
  return {
    type: AUTH_PAGE_FAILED,
    payload: err,
  };
};
