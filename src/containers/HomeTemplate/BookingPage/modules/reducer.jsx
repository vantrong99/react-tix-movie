import {
  BOOKING_FAILED,
  BOOKING_REQUEST,
  BOOKING_SUCCESS,
  BOOKING__TICKET,
} from "./constant";
let initialSate = {
  loading: false,
  data: null,
  err: null,
  gheDangChon: [],
};
const bookingReducer = (state = initialSate, action) => {
  switch (action.type) {
    case BOOKING_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case BOOKING_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case BOOKING_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    case BOOKING__TICKET:
      let gheDangChonNew = [...state.gheDangChon];
      // tìm vị trí ghế đnag chọn trong mảng chọn
      let index = gheDangChonNew.findIndex((ghe) => {
        return ghe.maGhe === action.payload.maGhe;
      });
      // khi click nếutìm thấy, nghĩa là đã chọn rồi thì bỏ chọn(xóa đi)
      if (index !== -1) {
        gheDangChonNew.splice(index, 1);
      }
      // không tìm thấy thì thêm vào
      else {
        gheDangChonNew.push(action.payload);
      }
      state.gheDangChon = gheDangChonNew;
      return { ...state };
    default:
      return { ...state };
  }
};
export default bookingReducer;
