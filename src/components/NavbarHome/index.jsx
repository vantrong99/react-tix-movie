import React, { useState } from "react";
import "./style.css";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
export default function NavbarHome(props) {
  // chuyển về object;
  let status = "Đăng nhập";
  if (localStorage.getItem("User")) {
    status = JSON.parse(localStorage.getItem("User")).hoTen;
  }
  // xử lý đăng nhâp và xem thông tin đặt vé
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
  // xử lí đăng ký và đăng xuất
  const handle = () => {
    if (status === "Đăng nhập") {
      return <Link to="/register">Đăng ký</Link>;
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
                window.location.reload();
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
  return (
    <div>
      <div id="nav__fixed">
        <nav className="navbar navbar-expand-md  navbar-light ">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            <img src="/img/logo.png" />
          </Link>
          {/* Toggler/collapsibe Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#lichChieu">
                  Lịch Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cumRap">
                  Cụm Rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tinTuc">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ungDung">
                  Ứng dụng
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
  );
}
