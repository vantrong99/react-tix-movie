import React, { Component } from "react";
import { actBookingTicket } from "./../../containers/HomeTemplate/BookingPage/modules/action";
import { connect } from "react-redux";
import "./style.css";
class ListChair extends Component {
  renderChair = () => {
    const { listGhe } = this.props;
    if (listGhe) {
      return listGhe.map((item) => {
        // những ghế đã đặt thì không thể bấm vào
        let disabled = false;
        // css theo từng loại ghế
        let loaiGhe = "";
        if (item.loaiGhe === "Thuong") {
          loaiGhe = "ghe__thuong";
        }
        if (item.loaiGhe === "Vip") {
          loaiGhe = "ghe__vip";
        }
        if (item.daDat) {
          loaiGhe = "da__dat";
          disabled = true;
        }
        // khi chọn thì sẽ hiện tên ghế và đổi class
        let gheDangDat = "";
        let tenGhe = "";
        // tìm vị trí của ghê hiện tại trong danh mục ghế đang chọn
        let indexChair = this.props.gheDangChon.findIndex((ghe) => {
          return ghe.maGhe === item.maGhe;
        });
        if (indexChair !== -1) {
          gheDangDat = "dang__dat";
          tenGhe = item.tenGhe;
        }
        return (
          <button
            className={`${loaiGhe} ${gheDangDat}`}
            key={item.maGhe}
            disabled={disabled}
            onClick={() => {
              this.props.bookingTicket(item);
            }}
          >
            {tenGhe}
          </button>
        );
      });
    }
  };
  render() {
    return <>{this.renderChair()}</>;
  }
}
const mapDistpatchToProps = (dispatch) => {
  return {
    bookingTicket: (item) => {
      dispatch(actBookingTicket(item));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    gheDangChon: state.bookingReducer.gheDangChon,
  };
};
export default connect(mapStateToProps, mapDistpatchToProps)(ListChair);
