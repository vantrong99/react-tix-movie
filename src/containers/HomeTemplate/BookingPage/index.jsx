import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import ListChair from "../../../components/ListChair";
import { actBookingApi } from "./modules/action";
import Infobooking from "./infobooking";
import Swal from "sweetalert2";
import "./style.css";
import Loading from "../../../components/Loading";
class BookingPage extends Component {
  componentDidMount() {
    const { bookingApi } = this.props;
    bookingApi(this.props.match.params.maLichChieu);
  }
  renderDanhSachGhe = () => {
    const { thongTinPhongVe } = this.props;
    if (thongTinPhongVe) {
      let result = [];
      while (thongTinPhongVe.danhSachGhe.length) {
        result.push(thongTinPhongVe.danhSachGhe.splice(0, 16));
      }
      return result.map((item, index) => {
        return (
          <div className="row__chair" key={index}>
            <ListChair listGhe={item} key={index} />
          </div>
        );
      });
    }
  };

  renderHTML = () => {
    let status = "Đăng nhập";
    if (localStorage.getItem("User")) {
      status = JSON.parse(localStorage.getItem("User")).hoTen;
    }
    const handleLogin = () => {
      if (status === "Đăng nhập") {
        return (
          <>
            <Link to="/auth">
              <img src="/img/avatar.png" alt="Ảnh đại diện " />
              {status}
            </Link>
          </>
        );
      } else {
        return (
          <>
            <Link to="/accout">
              <img src="/img/avatar.png" alt="Ảnh đại diện " />
              {status}
            </Link>
          </>
        );
      }
    };
    const handle = () => {
      if (status === "Đăng nhập") {
        return <a href="#">Đăng ký</a>;
      } else {
        return (
          <a
            href="#"
            onClick={() => {
              Swal.fire({
                title: "Bạn muốn đăng xuất ?",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Đồng ý",
                cancelButtonText: "Hủy",
              }).then((result) => {
                if (result.value) {
                  localStorage.removeItem("userLogin");
                  localStorage.clear();
                  Swal.fire("Đăng xuất thành công");
                  window.location.reload();
                } else {
                  Swal.fire("Đăng xuất thất bại !");
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                  // reload lại trang
                }
              });
            }}
          >
            Đăng xuất
          </a>
        );
      }
    };
    const { thongTinPhongVe } = this.props;
    if (thongTinPhongVe) {
      return (
        <div>
          <div className="my__booking">
            <div className="booking__header">
              <div id="nav__fixed">
                <nav className="navbar navbar-expand-md  navbar-light ">
                  <Link className="navbar-brand" to="/">
                    <img src="/img/logo.png" />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  {/* Navbar links */}
                  <div
                    className="collapse navbar-collapse"
                    id="collapsibleNavbar"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          CHỌN GHẾ & THANH TOÁN
                        </a>
                      </li>
                    </ul>
                    <ul className="navbar__sign">
                      <li className="login">{handleLogin()}</li>
                      <li className="sign">{handle()}</li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="booking__ticker">
              <div className="row">
                <div className="col-9">
                  <div className="choice__ticker">
                    <div className="header__info">
                      <div className="info__rap">
                        <div className="info__img">
                          <img src={thongTinPhongVe.thongTinPhim.hinhAnh} />
                        </div>
                        <div className="thongTin__rap">
                          <span className="name__rap">
                            {thongTinPhongVe.thongTinPhim.tenCumRap}
                          </span>
                          <span className="diachi__rap">
                            {thongTinPhongVe.thongTinPhim.diaChi}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="booking__screen">
                      <img src="/img/screen.png" />
                    </div>
                    <div className="list__chair">
                      {this.renderDanhSachGhe()}
                    </div>
                    <div className="note__chair">
                      <div className="note__content">
                        <div className="note__item">
                          <span className="chair__normal"></span>
                          <span className="note__text">Ghế thường</span>
                        </div>
                        <div className="note__item">
                          <span className="chair__vip"></span>
                          <span className="note__text">Ghế VIP</span>
                        </div>
                        <div className="note__item">
                          <span className="chair__current"></span>
                          <span className="note__text">Ghế đang chọn</span>
                        </div>
                        <div className="note__item">
                          <span className="chair__taken"></span>
                          <span className="note__text">
                            Ghế đã có người chọn
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <Infobooking history={this.props.history} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  checkLogin = () => {
    return JSON.parse(localStorage.getItem("User"));
  };
  render() {
    if (this.checkLogin() === null) {
      return <Redirect to="/auth" />;
    }
    if (this.props.loading) return <Loading />;
    return <div>{this.renderHTML()}</div>;
    // } else {
    //   <Redirect to="/auth" />;
    // }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookingApi: (idLichChieu) => {
      dispatch(actBookingApi(idLichChieu));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    thongTinPhongVe: state.bookingReducer.data,
    loading: state.bookingReducer.loading,
    // gheChon: state.bookingReducer.gheDangChon,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
