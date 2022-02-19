import HomePage from "../containers/HomeTemplate/HomePage";
import DashBoard from "../containers/AdminTemplate/Dashboard";
import User from "../containers/AdminTemplate/User";
import DetailPage from "../containers/HomeTemplate/DetailPage";
import accout from "../containers/HomeTemplate/accout";
const routesHome = [
  { exact: true, path: "/", component: HomePage },
  { exact: false, path: "/detail/:id/:tenPhim", component: DetailPage },
  // { exact: false, path: "/detail/:id", component: DetailPage },
  { exact: false, path: "/accout", component: accout },
];
const routesAdmin = [
  { exact: false, path: "/dashboard", component: DashBoard },
  { exact: false, path: "/User", component: User },
];
export { routesHome, routesAdmin };
