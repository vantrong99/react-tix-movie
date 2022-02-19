import React from "react";
import HomeTemplate from "./containers/HomeTemplate";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesHome, routesAdmin } from "./routes/index";
import AuthPage from "./containers/HomeTemplate/AuthPage";
import BookingPage from "./containers/HomeTemplate/BookingPage";
import Register from "./containers/HomeTemplate/Register";
const showLayoutHome = (routes) => {
  return routes.map((item, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={item.exact}
        Component={item.component}
        path={item.path}
      />
    );
  });
};
const showLayoutAdmin = (routes) => {
  return routes.map((item, index) => {
    return (
      <Route
        key={index}
        exact={item.exact}
        component={item.component}
        path={item.path}
      />
    );
  });
};
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showLayoutHome(routesHome)}
          {showLayoutAdmin(routesAdmin)}
          <Route path="/auth" component={AuthPage} />
          {/* <Route
            path="/booking/:maLichChieu/:tenPhim"
            component={BookingPage}
          /> */}
          <Route path="/booking/:maLichChieu" component={BookingPage} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
