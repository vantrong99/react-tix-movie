import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actlistMovieApi } from "./modules/action";
import Loading from "./../Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Slider from "react-slick";
import Movie from "../Movie";
function ListMovie(props) {
  const { listMovieApi, loading, listMovie } = props;
  // Tham so thu 2 la mang rong, tuong tu nhu component DidMout, dung de goi api, chay 1 lan
  useEffect(() => {
    listMovieApi();
  }, []);
  const renderListMovie = () => {
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((item) => {
        return <Movie key={item.maPhim} movie={item} />;
      });
    }
  };
  const settings = {
    rows: 2,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (loading) return <Loading />;
  return (
    <div>
      <div className="slick__carousel" id="lichChieu">
        <Slider {...settings}>{renderListMovie()}</Slider>
      </div>
      <div className="my__section" id="cumRap">
        <img src="/img/back-news.png" alt="hinh anh" />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    listMovie: state.listMovieReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    listMovieApi: () => {
      dispatch(actlistMovieApi());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
