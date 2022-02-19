import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actRegisterApi } from "./modules/action";
import "./style.css";
function Register(props) {
  const { errors, registerApi } = props;
  const [user, setUser] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      sdt: "",
      email: "",
      maNhom: "GP08",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      sdt: "",
      email: "",
    },
    valid: {
      taiKhoan: false,
      matKhau: false,
      hoTen: false,
      sdt: false,
      email: false,
    },
  });
  const handleOnChange = (event) => {
    let { value, name } = event.target;
    let newValues = { ...user.values, [name]: value };
    setUser({
      ...user,
      values: newValues,
    });
  };
  const handleFormValid = () => {
    let result = false;
    if (
      user.valid.taiKhoan &&
      user.valid.hoTen &&
      user.valid.matKhau &&
      user.valid.sdt &&
      user.valid.email
    ) {
      result = true;
    }
    return result;
  };
  const handleErrors = (event) => {
    let { value, name } = event.target;
    let newErrors = { ...user.errors, [name]: value };
    let newValid = { ...user.valid, [name]: value };
    switch (name) {
      case "hoTen":
        newErrors[name] = value === "" ? "Họ tên không được bỏ trống" : "";
        newValid[name] = newErrors[name] !== "" ? false : true;
        if (value && value.length < 4) {
          newValid[name] = false;
          newErrors[name] = "Họ tên phải nhiều hơn 4 ký tự";
        }
        break;
      case "taiKhoan":
        newErrors[name] =
          value === "" ? "Tên tài khoản không được bỏ trống" : "";
        newValid[name] = newErrors[name] !== "" ? false : true;
        if ((value && value.length < 4) || value.length > 12) {
          newValid[name] = false;
          newErrors[name] = "Tên tài khoản phải từ 4 đến 12 ký tự";
        }
        break;
      case "email":
        newErrors[name] = value === "" ? "Email không được bỏ trống" : "";
        newValid[name] = newErrors[name] !== "" ? false : true;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(value)) {
          newValid[name] = false;
          newErrors[name] = "*Email không hợp lệ !!";
        }
        break;
      case "sdt":
        newErrors[name] =
          value === "" ? "Số điện thoại không được bỏ trống" : "";
        newValid[name] = newErrors[name] !== "" ? false : true;
        const parternSodt = /((09|03|07|08|05)+([0-9]{8})\b)/;
        if (!parternSodt.test(value)) {
          newValid[name] = false;
          newErrors[name] = "*Số điện thoại không hợp lệ !!.(VD: 0364567890)";
        }
        break;
      case "matKhau":
        newErrors[name] = value === "" ? "Mật khẩu không được bỏ trống" : "";
        newValid[name] = newErrors[name] !== "" ? false : true;
        if ((value && value.length < 4) || value.length > 12) {
          newValid[name] = false;
          newErrors[name] = "Mật khẩu từ 4 - 12 ký tự";
        }
        break;
      default:
        break;
    }

    setUser({
      ...user,
      errors: newErrors,
      valid: newValid,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    registerApi(user.values, props.history);
  };
  const renderErrors = () => {
    if (errors) {
      return <div className="alert alert-danger">{errors.response.data}</div>;
    }
  };
  return (
    <div>
      <div className="my__auth">
        <img src="/img/bg2.jpg" alt="" />
        <form className="my__form" onSubmit={handleLogin}>
          <div className="form-group">
            <div className="form__img">
              <img src="/img/logo.png" />
              <h3>Đăng ký</h3>
            </div>

            <input
              placeholder="Họ tên"
              type="text"
              className="form-control"
              name="hoTen"
              onBlur={handleErrors}
              onChange={handleOnChange}
              onKeyUp={handleErrors}
            />
            {user.errors.hoTen !== "" ? (
              <div className="alert alert-danger">{user.errors.hoTen}</div>
            ) : (
              ""
            )}
            <input
              placeholder="Tài khoản"
              type="text"
              className="form-control"
              name="taiKhoan"
              onBlur={handleErrors}
              onChange={handleOnChange}
              onKeyUp={handleErrors}
            />
            {user.errors.taiKhoan !== "" ? (
              <div className="alert alert-danger">{user.errors.taiKhoan}</div>
            ) : (
              ""
            )}
            <input
              placeholder="Email"
              type="email"
              className="form-control"
              name="email"
              onBlur={handleErrors}
              onChange={handleOnChange}
              onKeyUp={handleErrors}
            />
            {user.errors.email !== "" ? (
              <div className="alert alert-danger">{user.errors.email}</div>
            ) : (
              ""
            )}
            <input
              placeholder="Số điện thoại"
              type="text"
              className="form-control"
              name="sdt"
              onBlur={handleErrors}
              onChange={handleOnChange}
              onKeyUp={handleErrors}
            />
            {user.errors.sdt !== "" ? (
              <div className="alert alert-danger">{user.errors.sdt}</div>
            ) : (
              ""
            )}
            <input
              placeholder="Mật Khẩu"
              name="matKhau"
              type="password"
              className="form-control"
              onBlur={handleErrors}
              onChange={handleOnChange}
              onKeyUp={handleErrors}
            />
            {user.errors.matKhau !== "" ? (
              <div className="alert alert-danger">{user.errors.matKhau}</div>
            ) : (
              ""
            )}
          </div>

          {renderErrors()}
          <button
            type="submit"
            className="form__sign btn btn-success"
            disabled={!handleFormValid()}
          >
            Đăng ký
          </button>
          <p>
            Đã có tài khoản ? <Link to="/auth">Đăng nhập ngay</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    registerApi: (user, history) => {
      dispatch(actRegisterApi(user, history));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    errors: state.registerReducer.err,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
