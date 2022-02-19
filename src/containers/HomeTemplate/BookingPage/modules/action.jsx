import axios from "axios";
import {
  BOOKING_FAILED,
  BOOKING_REQUEST,
  BOOKING_SUCCESS,
  BOOKING__TICKET,
} from "./constant";

export const actBookingApi = (idLichChieu) => {
  return (dispatch) => {
    dispatch(actBookingRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idLichChieu}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actBookingSuccess(result.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actBookingFailed(err));
      });
  };
};

export const actBookingRequest = () => {
  return {
    type: BOOKING_REQUEST,
  };
};
export const actBookingSuccess = (data) => {
  return {
    type: BOOKING_SUCCESS,
    payload: data,
  };
};
export const actBookingFailed = (err) => {
  return {
    type: BOOKING_FAILED,
    payload: err,
  };
};
export const actBookingTicket = (ticket) => {
  return {
    type: BOOKING__TICKET,
    payload: ticket,
  };
};
export const actBookingTicketApi = (maLichChieu, danhSachGhe, history) => {
  return () => {
    const user = JSON.parse(localStorage.getItem("User"));
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      method: "POST",
      data: {
        maLichChieu,
        danhSachVe: danhSachGhe,
        taiKhoanNguoiDung: user.taiKhoan,
      },
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then(() => {
        // history.push("/");

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
