import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actAuthApi } from "./modules/action";
import "./style.css";
class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: { matKhau: "", taiKhoan: "" },
      errors: {
        taiKhoan: "",
        matKhau: "",
      },
      // khi nào cả mật khẩu và tài khoản đều true thì mới cho bấm vào đăng nhập
      matKhauValid: false,
      taiKhoanValid: false,
      formValid: false,
    };
  }
  handleOnChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      // cập nhật lại giá trị cho tài khoản và mật khẩu
      values: { ...this.state.values, [name]: value },
    });
  };
  // hiển thị hay ẩn nút đăng nhập
  handleFormValid = () => {
    const { matKhauValid, taiKhoanValid } = this.state;

    this.setState({
      formValid: matKhauValid && taiKhoanValid ? true : false,
    });
  };
  handleErrors = (event) => {
    const { name, value } = event.target;
    let mess;
    let { taiKhoanValid, matKhauValid } = this.state;
    switch (name) {
      case "taiKhoan":
        mess = value === "" ? "Tên tài khoản không được bỏ trống" : "";
        // neeus mess rong thi tra ve true
        taiKhoanValid = mess !== "" ? false : true;
        if ((value && value.length < 4) || value.length > 12) {
          taiKhoanValid = false;
          mess = "Tên tài khoản phải từ 4 đến 12 ký tự";
        }
        break;
      case "matKhau":
        mess = value === "" ? "Mật khẩu không được bỏ trống" : "";
        matKhauValid = mess !== "" ? false : true;
        if ((value && value.length < 4) || value.length > 12) {
          matKhauValid = false;
          mess = "Mật khẩu từ 4 - 12 ký tự";
        }
        break;

      default:
        break;
    }
    this.setState(
      {
        errors: {
          ...this.state.errors,
          [name]: mess,
        },
        matKhauValid,
        taiKhoanValid,
      },
      () => {
        this.handleFormValid();
      }
    );
  };
  handleLogin = (event) => {
    // ngăn trang load lại
    event.preventDefault();
    this.props.authLogin(this.state.values, this.props.history);
  };
  renderErrors = () => {
    if (this.props.errors) {
      return (
        <div className="alert alert-danger">
          {this.props.errors.response.data}
        </div>
      );
    }
  };
  render() {
    // console.log(this.props);
    return (
      <div className="my__auth">
        <img src="/img/bg2.jpg" alt="" />
        <form className="my__form" onSubmit={this.handleLogin}>
          <div className="form-group">
            <div className="form__img">
              <img src="/img/logo.png" />
              <h3>Đăng nhập</h3>
            </div>

            <input
              placeholder="Tài Khoản"
              type="text"
              className="form-control"
              name="taiKhoan"
              onBlur={this.handleErrors}
              onChange={this.handleOnChange}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.taiKhoan !== "" ? (
              <div className="alert alert-danger">
                {this.state.errors.taiKhoan}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <input
              placeholder="Mật Khẩu"
              name="matKhau"
              type="password"
              className="form-control"
              onBlur={this.handleErrors}
              onChange={this.handleOnChange}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.matKhau !== "" ? (
              <div className="alert alert-danger">
                {this.state.errors.matKhau}
              </div>
            ) : (
              ""
            )}
          </div>
          {this.renderErrors()}
          <button
            type="submit"
            className="form__sign btn btn-success"
            disabled={!this.state.formValid}
          >
            Đăng nhập
          </button>
          <p>
            Bạn chưa có tài khoản ? <Link to="/register">Đăng ký ngay</Link>
          </p>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // phải truyền history để bên action có thể push lại trang chủ
    authLogin: (user, history) => {
      dispatch(actAuthApi(user, history));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    errors: state.authReducer.err,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
