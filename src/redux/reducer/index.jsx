import { combineReducers } from "redux";
import listMovieReducer from "../../components/ListMovie/modules/reducer";
import listRapReducer from "../../components/ListRap/modules/reducer";
import movieDetailReducer from "./../../containers/HomeTemplate/DetailPage/modules/reducer";
import authReducer from "./../../containers/HomeTemplate/AuthPage/modules/reducer";
import bookingReducer from "./../../containers/HomeTemplate/BookingPage/modules/reducer";
import registerReducer from "./../../containers/HomeTemplate/Register/modules/reducer";
import accoutReducer from "./../../containers/HomeTemplate/accout/modules/reducer";
const rootReducer = combineReducers({
  listMovieReducer,
  listRapReducer,
  movieDetailReducer,
  authReducer,
  bookingReducer,
  registerReducer,
  accoutReducer,
});
export default rootReducer;
