import React, { Component } from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default class UngDung extends Component {
  // renderSlider = () => {
  //   var content = "";
  //   for (let i = 0; i < 17; i++) {
  //     content += `

  //             <div className="slider__item"><img src="/img/slide${i}.jpg" alt="hinhAnh"/></div>

  //             `;
  //   }
  //   return content;
  // };
  render() {
    const ungdungSetting = {
      rows: 1,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="my__ungdung" id="ungDung">
        <img id="my__img" src="/img/backapp.jpg" alt="black app" />
        <div className="ungdung__content">
          <div className="row">
            <div className="col-12 col-lg-6 dis__play">
              <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
              <p>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <div className="ungdung__btn">
                <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">
                  App miễn phí - Tải về ngay!
                </a>
              </div>
              <p>
                TIX có hai phiên bản <span>iOS</span> & <span>Android</span>
              </p>
            </div>
            <div className="col-sm-4 col-lg-2"></div>
            <div className="col-12 col-sm-8 col-lg-4">
              <div className="ungdung__mobile">
                <img src="/img/mobile.png" alt="mobie" />
                {/* {this.renderSlider()} */}
                <div className="ungdung__slider">
                  <Slider {...ungdungSetting}>
                    <div className="slider__item">
                      <img src="/img/slide1.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide2.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide3.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide4.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide5.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide6.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide7.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide8.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide9.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide10.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide11.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide12.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide13.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide14.jpg" alt="hinhAnh" />
                    </div>
                    <div className="slider__item">
                      <img src="/img/slide15.jpg" alt="hinhAnh" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
