import axios from "axios";
import {
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./constant";
export const actRegisterApi = (user, history) => {
  return (dispatch) => {
    dispatch(actRegisterRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: {
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        email: user.email,
        soDt: user.sdt,
        maNhom: user.maNhom,
        maLoaiNguoiDung: "khachHang",
        hoTen: user.hoTen,
      },
    })
      .then((result) => {
        dispatch(actRegisterSuccess(result.data));
        alert("Đăng ký thành công");
        history.push("/");
      })
      .catch((err) => {
        dispatch(actRegisterFailed(err));
      });
  };
};
const actRegisterRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};
const actRegisterSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};
const actRegisterFailed = (err) => {
  return {
    type: REGISTER_FAILED,
    payload: err,
  };
};
