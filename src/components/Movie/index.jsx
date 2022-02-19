import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import $ from "jquery";
export default function Movie(props) {
  const { movie } = props;
  // const popupVideo = (i) => {
  //   var videoSrc = $(`#${i} iframe`).attr("src");
  //   $(`#${i}`)
  //     .on("show.bs.modal", function () {
  //       $(`#${i} iframe`).attr("src", videoSrc + "?autoplay=1");
  //     })
  //     .on("hidden.bs.modal", function (e) {
  //       $(`#${i} iframe`).attr("src", null);
  //     });
  // };
  return (
    <div>
      <div className="card__movie">
        <div className="card__main">
          <div className="main__top">
            <img src={movie.hinhAnh} alt="movie picture" />
            <div className="point">
              <span> {movie.danhGia}</span>
              <div className="point__star">
                <img src="/img/star.png" alt="point star" />
                <img src="/img/star.png" alt="point star" />
                <img src="/img/star.png" alt="point star" />
                <img src="/img/star.png" alt="point star" />
                <img src="/img/star.png" alt="point star" />
              </div>
            </div>
            <div className="top__overplay"></div>
            <div className="img__overplay">
              <img
                data-toggle="modal"
                data-target="#carousel-7"
                src="/img/play-video.png"
                alt="play-video"
              />
            </div>
          </div>
          <div className="main__bottom">
            <p>
              <span>C13</span>
              {movie.tenPhim}
            </p>
            <div>
              <Link
                // className="bottom__overplay"
                // to={`/detail/${movie.maPhim}/${movie.tenPhim}`}
                className="bottom__overplay"
                to={`/detail/${movie.maPhim}/${movie.tenPhim}`}
              >
                MUA VÉ
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="modal fade"
        id="carousel-7"
        // tabIndex={-1}
        // aria-labelledby="exampleModalLabel"
        // aria-hidden="true"
        onClick={() => {
          popupVideo("carousel-7");
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              {" "}
              <iframe
                src="https://www.youtube.com/embed/9GmrvPRfhBk"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
