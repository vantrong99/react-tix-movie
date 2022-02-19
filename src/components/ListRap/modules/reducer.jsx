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

let initialState = {
  loading: false,
  listRap: null,
  thongTinCumRap: null,
  thongTinLichChieu: null,
  err: null,
};
const listRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_RAP_REQUEST:
      state.loading = true;
      state.listRap = null;
      state.err = null;
      return { ...state };
    case LIST_RAP_SUCCESS:
      state.loading = false;
      state.listRap = action.payload;
      state.err = null;
      return { ...state };
    case LIST_RAP_FAILED:
      state.loading = false;
      state.listRap = null;
      state.err = action.payload;
      return { ...state };
    case THONG_TIN_CUM_RAP_REQUEST:
      state.loading = true;
      state.thongTinCumRap = null;
      state.err = null;
      return { ...state };
    case THONG_TIN_CUM_RAP_SUCCESS:
      state.loading = false;
      state.thongTinCumRap = action.payload;
      state.err = null;
      return { ...state };
    case THONG_TIN_CUM_RAP_FAILED:
      state.loading = false;
      state.thongTinCumRap = null;
      state.err = action.payload;
      return { ...state };
    case THONG_TIN_LICH_CHIEU_REQUEST:
      state.loading = true;
      state.thongTinLichChieu = null;
      state.err = null;
      return { ...state };
    case THONG_TIN_LICH_CHIEU_SUCCESS:
      state.loading = false;
      state.thongTinLichChieu = action.payload;
      state.err = null;
      return { ...state };
    case THONG_TIN_LICH_CHIEU_FAILED:
      state.loading = false;
      state.thongTinLichChieu = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default listRapReducer;
