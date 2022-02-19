import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actListRapApi,
  actThongTinCumRapApi,
  actThongTinLichChieuApi,
} from "./modules/action";
import "./style.css";
function ListRap(props) {
  const {
    loading,
    listRap,
    thongTinCumRap,
    thongTinLichChieu,
    listRapApi,
    thongTinLichChieuApi,
    thongTinCumRapApi,
  } = props;
  // tham so thu 2 la mang rong, tuong tu nhu component didmount, chay 1 lan
  useEffect(() => {
    listRapApi();
    // tự động lấy dữ liệu của rạp BHDStar để render rạp trong lần đầu tiên
    thongTinCumRapApi("BHDStar");
    //tự động lấy thông tin lịch chiếu của rạp BHD để render phim trong lần đầu
    thongTinLichChieuApi("BHDStar");
  }, []);
  // const a=BHD;
  // render cac rap theo he thong rap (cột giữa)
  const renderHtmlCumRapTheoHeThong = () => {
    if (thongTinCumRap && thongTinCumRap.length > 0) {
      var danhSachRapTheoHeThong = thongTinCumRap.map((item, index) => {
        var idMaCumRap = `#${item.maCumRap}`;
        var idTab = `${item.maCumRap}-tab`;
        if (index == 0) {
          return (
            <a
              id={idTab}
              className="nav-link active"
              data-toggle="pill"
              href={idMaCumRap}
              key={item.maCumRap}
              role="tab"
              aria-selected="true"
            >
              <div className="rap__detail">
                <div className="rap__img">
                  <img src="/img/BDHStar.jpg" alt=" hinh anh" />
                </div>
                <div className="rap__content">
                  <span>{item.tenCumRap}</span>
                  <br />
                  <span className="rap__add">{item.diaChi}</span>
                </div>
              </div>
            </a>
          );
        } else {
          return (
            <a
              id={idTab}
              className="nav-link "
              data-toggle="pill"
              href={idMaCumRap}
              key={item.maCumRap}
              role="tab"
              aria-selected="false"
            >
              <div className="rap__detail">
                <div className="rap__img">
                  <img src="/img/BDHStar.jpg" alt=" hinh anh" />
                </div>
                <div className="rap__content">
                  <span>{item.tenCumRap}</span>
                  <br />
                  <span className="rap__add">{item.diaChi}</span>
                </div>
              </div>
            </a>
          );
        }
      });
    }
    return <>{danhSachRapTheoHeThong}</>;
  };
  // render phim theo từng rạp dựa vào mã rạp
  const renderPhimTheoRap = (maRap) => {
    if (thongTinLichChieu && thongTinLichChieu.length > 0) {
      var lichChieuTheoRap = thongTinLichChieu.map((item) => {
        // lọc phim theo mã rạp
        if (item.maCumRap == maRap) {
          // duyệt mảng phim theo rạp
          return item.danhSachPhim.map((phim) => {
            // lấy ngày giờ chiếu của phim
            var ngayGio = phim.lstLichChieuTheoPhim.map((lichChieu) => {
              // lấy ngày giờ từ dữ liệu ngày chiếu  lịch chiếu
              var ngayChieu = new Date(
                lichChieu.ngayChieuGioChieu
              ).toLocaleDateString();
              var gioChieu = new Date(
                lichChieu.ngayChieuGioChieu
              ).toLocaleTimeString();
              return (
                <div key={lichChieu.maLichChieu} className="col-4">
                  <div className="ngay__Gio">
                    <Link
                      // to={`/booking/${lichChieu.maLichChieu}/${phim.tenPhim}`}
                      to={`/booking/${lichChieu.maLichChieu}`}
                    >
                      <span>{ngayChieu}</span>~
                      <span className="gio__Chieu">{gioChieu}</span>
                    </Link>
                  </div>
                </div>
              );
            });
            return (
              <div className="phim__item" key={phim.maPhim}>
                <div className="phim__intro">
                  <div className="phim__img">
                    <img src={phim.hinhAnh} alt="" />
                  </div>
                  <div className="phim__info">
                    <h3>
                      <span>C13</span>
                      {phim.tenPhim}
                    </h3>
                    <p>2D DIGITAL</p>
                  </div>
                </div>
                <div className="row ngaychieu__giochieu">{ngayGio}</div>
              </div>
            );
          });
        }
      });
    }
    return <>{lichChieuTheoRap}</>;
  };
  // render cụm phim theo cụm rạp
  const renderCumPhimTheoRap = () => {
    if (thongTinCumRap && thongTinCumRap.length > 0) {
      var cumPhim = thongTinCumRap.map((item, index) => {
        var idTabb = `${item.maCumRap}-tab`;
        if (index == 0) {
          return (
            <div
              key={item.maCumRap}
              id={item.maCumRap}
              className="tab-pane fade active show"
              role="tabpanel"
              aria-labelledby={idTabb}
            >
              {renderPhimTheoRap(item.maCumRap)}
            </div>
          );
        } else {
          return (
            <div
              key={item.maCumRap}
              id={item.maCumRap}
              className="tab-pane fade"
              role="tabpanel"
              aria-labelledby={idTabb}
            >
              {renderPhimTheoRap(item.maCumRap)}
            </div>
          );
        }
      });
    }
    return <>{cumPhim}</>;
  };
  const renderHTML = () => {
    if (listRap && listRap.length > 0) {
      // render danh sach rap trong he thong
      var danhSachRap = listRap.map((item, index) => {
        var idHeThong = `#${item.maHeThongRap}`;
        var idTab = `${item.maHeThongRap}-tab`;
        // active item đầu tiên
        if (index == 0) {
          return (
            <a
              key={item.maHeThongRap}
              id={idTab}
              className="nav-link active"
              data-toggle="pill"
              href={idHeThong}
              aria-selected="true"
              role="tab"
              onClick={() => {
                // gọi api lấy ra danh sách các rạp theo cụm
                thongTinCumRapApi(item.maHeThongRap);
                // gọi api lấy danh sách lịch chiếuphim theo cụm rạp
                thongTinLichChieuApi(item.maHeThongRap);
              }}
            >
              <div className="theater__logo">
                <img src={item.logo} alt={item.tenHeThongRap} />
              </div>
            </a>
          );
        } else {
          return (
            <a
              key={item.maHeThongRap}
              id={idTab}
              className="nav-link "
              data-toggle="pill"
              href={idHeThong}
              aria-selected="false"
              role="tab"
              onClick={() => {
                // gọi api lấy ra danh sách các rạp theo cụm
                thongTinCumRapApi(item.maHeThongRap);
                // gọi api lấy danh sách lịch chiếuphim theo cụm rạp
                thongTinLichChieuApi(item.maHeThongRap);
              }}
            >
              <div className="theater__logo">
                <img src={item.logo} alt={item.tenHeThongRap} />
              </div>
            </a>
          );
        }
      });
    }
    if (listRap && listRap.length > 0) {
      // render danh sach cac cum rap theo he thong
      var thongTinCumRapTheoHeThong = listRap.map((item, index) => {
        var idTab = `${item.maHeThongRap}-tab`;
        // tự động active chi item đầu tiên
        if (index == 0) {
          return (
            <div
              key={item.maHeThongRap}
              className="tab-pane fade active show"
              id={item.maHeThongRap}
              role="tabpanel"
              aria-labelledby={idTab}
            >
              <div className="cum__rap">
                <div className="rap__chitiet">
                  <div
                    className="nav flex-column nav-pills"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {renderHtmlCumRapTheoHeThong()}
                  </div>
                </div>
                <div className="lichchieu__chitiet">
                  <div className="tab-content">{renderCumPhimTheoRap()}</div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={item.maHeThongRap}
              className="tab-pane fade "
              id={item.maHeThongRap}
              role="tabpanel"
              aria-labelledby={idTab}
            >
              <div className="cum__rap">
                <div className="rap__chitiet">
                  <div
                    className="nav flex-column nav-pills"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {renderHtmlCumRapTheoHeThong()}
                  </div>
                </div>
                <div className="lichchieu__chitiet">
                  <div className="tab-content">{renderCumPhimTheoRap()}</div>
                </div>
              </div>
            </div>
          );
        }
      });
    }
    return (
      <div className="my__rap">
        <div className="my__theater">
          <div className="theater__list">
            <div
              className="nav flex-column nav-pills"
              role="tablist"
              aria-orientation="vertical"
            >
              {danhSachRap}
            </div>
          </div>
          <div className="theater__detail">
            <div className="tab-content">{thongTinCumRapTheoHeThong}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{renderHTML()}</div>
      <div className="my__section" id="tinTuc">
        <img src="/img/back-news.png" alt="hinh anh" />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.listRapReducer.loading,
    listRap: state.listRapReducer.listRap,
    thongTinCumRap: state.listRapReducer.thongTinCumRap,
    thongTinLichChieu: state.listRapReducer.thongTinLichChieu,
    err: state.listRapReducer.err,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    listRapApi: () => {
      dispatch(actListRapApi());
    },
    thongTinCumRapApi: (maHeThongRap) => {
      dispatch(actThongTinCumRapApi(maHeThongRap));
    },
    thongTinLichChieuApi: (maHeThongRap) => {
      dispatch(actThongTinLichChieuApi(maHeThongRap));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(ListRap);
