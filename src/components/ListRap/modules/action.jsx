import axios from "axios";
import {
  LIST_RAP_REQUEST,
  LIST_RAP_FAILED,
  LIST_RAP_SUCCESS,
  THONG_TIN_CUM_RAP_FAILED,
  THONG_TIN_CUM_RAP_REQUEST,
  THONG_TIN_CUM_RAP_SUCCESS,
  THONG_TIN_LICH_CHIEU_FAILED,
  THONG_TIN_LICH_CHIEU_REQUEST,
  THONG_TIN_LICH_CHIEU_SUCCESS,
} from "./constant";

// Lấy dữ liệu hệ thống rạp
export const actListRapApi = () => {
  return (dispatch) => {
    dispatch(actListRapRequest());
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListRapSuccess(result.data));
        // console.log(result.data);
      })
      .catch((err) => {
        dispatch(actListRapFailed(err));
        // console.log(err);
      });
  };
};
export const actListRapRequest = () => {
  return {
    type: LIST_RAP_REQUEST,
  };
};
export const actListRapSuccess = (data) => {
  return {
    type: LIST_RAP_SUCCESS,
    payload: data,
  };
};
export const actListRapFailed = (err) => {
  return {
    type: LIST_RAP_FAILED,
    payload: err,
  };
};
// Lấy thông tin cụm rạp theo hệ thống
export const actThongTinCumRapApi = (maHeThongRap) => {
  return (dispatch) => {
    dispatch(actThongTinCumRapRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actThongTinCumRapSuccess(result.data));
        // console.log(result.data);
      })
      .catch((err) => {
        dispatch(actThongTinCumRapFailed(err));
        // console.log(err);
      });
  };
};
export const actThongTinCumRapRequest = () => {
  return {
    type: THONG_TIN_CUM_RAP_REQUEST,
  };
};
export const actThongTinCumRapSuccess = (data) => {
  return {
    type: THONG_TIN_CUM_RAP_SUCCESS,
    payload: data,
  };
};
export const actThongTinCumRapFailed = (err) => {
  return {
    type: THONG_TIN_CUM_RAP_FAILED,
    payload: err,
  };
};
// lấy thông tin lịch chiếu theo hệ thống rạp
export const actThongTinLichChieuApi = (maHeThongRap) => {
  return (dispatch) => {
    dispatch(actThongTinLichChieuRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actThongTinLichChieuSuccess(result.data[0].lstCumRap));
        // console.log(result.data[0].lstCumRap);
      })
      .catch((err) => {
        dispatch(actThongTinLichChieuFailed(err));
        console.log(err);
      });
  };
};
export const actThongTinLichChieuRequest = () => {
  return {
    type: THONG_TIN_LICH_CHIEU_REQUEST,
  };
};
export const actThongTinLichChieuSuccess = (data) => {
  return {
    type: THONG_TIN_LICH_CHIEU_SUCCESS,
    payload: data,
  };
};
export const actThongTinLichChieuFailed = (err) => {
  return {
    type: THONG_TIN_LICH_CHIEU_FAILED,
    payload: err,
  };
};
