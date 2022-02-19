import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actMovieDetailApi } from "./modules/action";
import Loading from "./../../../components/Loading";
import Footer from "./../../../components/Footer";
import "./style.css";
import $ from "jquery";
import { Link } from "react-router-dom";

function DetailPage(props) {
  // console.log(props);
  const { id } = props.match.params;
  const { movieDetailApi, movieDetail, loading } = props;
  useEffect(() => {
    movieDetailApi(id);
  }, []);
  const detailPopup = (i) => {
    var video = $(`#${i} iframe`).attr("src");
    $(`#${i}`)
      .on("show.bs.modal", function () {
        // on opening the modal
        // set the video to autostart
        $(`#${i} iframe`).attr("src", video + "?autoplay=1");
      })
      .on("hidden.bs.modal", function (e) {
        // on closing the modal
        // stop the video
        $(`#${i} iframe`).attr("src", null);
      });
  };
  const renderBanner = () => {
    if (movieDetail) {
      return (
        <div className="my__movieDetail">
          <div className="movie__detail">
            <div className="movie__banner">
              <img src={movieDetail.hinhAnh} alt="Hinh Anh" />
            </div>
            <div className="movie__overplay"></div>
            <div className="movie__content ">
              <div className="row ">
                <div className="col-3 content__img">
                  <img src={movieDetail.hinhAnh} alt="hinh anh" />
                  <div className="my__overplay"></div>
                  <div className="play__overplay">
                    <img
                      type="button"
                      data-toggle="modal"
                      data-target="#carousel-1"
                      src="/img/play-video.png"
                      alt="play-video"
                    />
                  </div>
                </div>
                <div className="col-6 content__info">
                  <p>
                    Ngày khởi chiếu : &nbsp;
                    {new Date(movieDetail.ngayKhoiChieu).toLocaleDateString()}
                  </p>
                  <p className="movie__name">
                    <span>C13</span>
                    {movieDetail.tenPhim}
                  </p>
                  <p>2D / Digital</p>
                  <a href="#muave">Mua vé</a>
                </div>
                <div className="col-3 movie__danhgia">
                  <div className="point__detail">
                    <div className="point__boder"></div>
                    <div className="bar" id="bar"></div>
                    <span className="movie__point">{movieDetail.danhGia}</span>
                  </div>
                  <div className="movie__star">
                    <img src="/img/star.png" alt="star" />
                    <img src="/img/star.png" alt="star" />
                    <img src="/img/star.png" alt="star" />
                    <img src="/img/star.png" alt="star" />
                    <img src="/img/star.png" alt="star" />
                  </div>
                  <div className="people__danhgia">
                    <p>35 người đánh giá</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /// popup video //// */}
            <div>
              <div
                className="modal fade"
                id="carousel-1"
                tabIndex={-1}
                // aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                onClick={() => {
                  detailPopup("carousel-1");
                }}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      {" "}
                      <iframe
                        src={movieDetail.trailer}
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  const renderLichChieu = () => {
    let { movieDetail } = props;
    if (movieDetail) {
      return movieDetail.lichChieu.map((item, index) => {
        let ngayChieu = new Date(item.ngayChieuGioChieu).toLocaleDateString();
        let gioChieu = new Date(item.ngayChieuGioChieu).toLocaleTimeString();
        if (ngayChieu === "1/1/2019") {
          return (
            <tr key={index}>
              <td>{item.thongTinRap.tenCumRap}</td>
              <td>{item.thongTinRap.tenRap}</td>
              <td>{ngayChieu}</td>
              <td>{gioChieu}</td>
              <td>{item.giaVe}</td>
              <td className="booking">
                {/* <Link to={`/booking/${item.maLichChieu}/${item.tenPhim}`}>
                  Đặt vé
                </Link> */}
                <Link to={`/booking/${item.maLichChieu}`}>Đặt vé</Link>
              </td>
            </tr>
          );
        }
      });
    }
  };
  const renderThongTin = () => {
    if (movieDetail) {
      return (
        <div className="info__movie">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-5">
                  <p>Tên phim :</p>
                  <p>Ngày công chiếu :</p>
                  <p>Đánh giá :</p>
                  <p>Thể loại :</p>
                  <p>Ngôn ngữ :</p>
                  <p>Đạo diễn :</p>
                  <p>Diễn viên :</p>
                </div>
                <div className="col-6">
                  <p>{movieDetail.tenPhim}</p>
                  <p>
                    {new Date(movieDetail.ngayKhoiChieu).toLocaleDateString()}
                  </p>
                  <p>{movieDetail.danhGia}</p>
                  <p>Phiêu lưu, Drama</p>
                  <p>Tiếng Anh</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem ipsum sit.</p>
                </div>
              </div>
            </div>
            <div className="col-6 info__content">
              <p>Nội dung</p>
              <p>{movieDetail.moTa}</p>
            </div>
          </div>
        </div>
      );
    }
  };
  const renderMoreInfo = () => {
    let { movieDetail } = props;
    if (movieDetail) var movie = movieDetail.trailer;
    return (
      <div className="nav__more" id="muave">
        <ul
          className="nav more__navigation nav-pills mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Lịch chiếu
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Thông tin
            </a>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Tên Rạp</th>
                  <th>Rạp</th>
                  <th>Ngày Chiếu</th>
                  <th>Giờ Chiếu</th>
                  <th>Giá vé</th>
                  <th>Đặt vé</th>
                </tr>
              </thead>
              <tbody>{renderLichChieu()}</tbody>
            </table>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {renderThongTin()}
          </div>
        </div>
      </div>
    );
  };
  if (loading) return <Loading />;
  return (
    <div className="my__movieDetail">
      {renderBanner()}
      <div className="more__info">{renderMoreInfo()}</div>
      <Footer />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    movieDetailApi: (id) => {
      dispatch(actMovieDetailApi(id));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetailReducer.movieDetail,
    loading: state.movieDetailReducer.loading,
    err: state.movieDetailReducer.err,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
