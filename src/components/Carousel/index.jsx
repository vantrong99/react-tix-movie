import React from "react";
import "./style.css";
import $ from "jquery";

export default function Carousel() {
  const popupVideo = (i) => {
    var videoSrc = $(`#${i} iframe`).attr("src");
    $(`#${i}`)
      .on("show.bs.modal", function () {
        $(`#${i} iframe`).attr("src", videoSrc + "?autoplay=1");
      })
      .on("hidden.bs.modal", function (e) {
        $(`#${i} iframe`).attr("src", null);
      });
  };

  return (
    <div className="my__carousel">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
        data-interval="10000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to={1} />
          <li data-target="#carouselExampleCaptions" data-slide-to={2} />
          <li data-target="#carouselExampleCaptions" data-slide-to={3} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/carousel-1.png" alt="carousel-" />
            <a type="button" data-toggle="modal" data-target="#carousel-1">
              <img src="/img/play-video.png" />
            </a>
          </div>
          <div className="carousel-item">
            <img src="/img/carousel-2.png" alt="carousel-2" />
            <a type="button" data-toggle="modal" data-target="#carousel-2">
              <img src="/img/play-video.png" />
            </a>
          </div>
          <div className="carousel-item">
            <img src="/img/carousel-3.png" alt="carousel-3" />
            <a type="button" data-toggle="modal" data-target="#carousel-3">
              <img src="/img/play-video.png" />
            </a>
          </div>
          <div className="carousel-item">
            <img src="/img/carousel-4.png" alt="carousel-4" />
            <a type="button" data-toggle="modal" data-target="#carousel-4">
              <img src="/img/play-video.png" />
            </a>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div>
        <div>
          <div
            className="modal fade"
            id="carousel-1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            onClick={() => {
              popupVideo("carousel-1");
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  {" "}
                  <iframe
                    src="https://www.youtube.com/embed/eLd55DPT9lE"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="carousel-1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            onClick={() => {
              popupVideo("carousel-1");
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  {" "}
                  <iframe
                    src="https://www.youtube.com/embed/nh0BklwPN9Q"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="carousel-2"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            onClick={() => {
              popupVideo("carousel-2");
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  {" "}
                  <iframe
                    src="https://www.youtube.com/embed/nh0BklwPN9Q"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="carousel-3"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            onClick={() => {
              popupVideo("carousel-3");
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  {" "}
                  <iframe
                    src="https://www.youtube.com/embed/lAjEKy85E1M"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="carousel-4"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            onClick={() => {
              popupVideo("carousel-4");
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  {" "}
                  <iframe
                    src="https://www.youtube.com/embed/bMAdg_IvgG4"
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
