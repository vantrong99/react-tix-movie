import React, { Component } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { actBookingTicketApi } from "./modules/action";
import "./style.css";
class Infobooking extends Component {
  renderTotal = () => {
    return this.props.gheDangChon.reduce((total, ghe) => {
      return (total += ghe.giaVe);
    }, 0);
  };
  renderGheDangChon = () => {
    const { gheDangChon } = this.props;
    return gheDangChon.map((item) => {
      return (
        <span className="col" key={item.maGhe}>
          {item.tenGhe}{" "}
        </span>
      );
    });
  };

  render() {
    const { thongTinPhongVe, gheDangChon } = this.props;
    // kiểm tra khi nào chọn ghế mới được bấm thanh toán
    let check = true;
    if (gheDangChon.length !== 0) {
      check = false;
    }

    return (
      <div className="price__ticker">
        <div className="total__price">
          <p>{this.renderTotal()} Đ</p>
        </div>
        <div className="name__phim">
          <span>{thongTinPhongVe.thongTinPhim.tenPhim}</span>
        </div>
        <div className="date__time">
          <div className="row">
            <div className="col-6">
              <span>Ngày giờ chiếu :</span>
            </div>
            <div className="col-6 text-right font-weight-bold">
              <span>
                {thongTinPhongVe.thongTinPhim.ngayChieu}~
                {thongTinPhongVe.thongTinPhim.gioChieu}
              </span>
            </div>
          </div>
        </div>
        <div className="group__theater">
          <div className="row">
            <div className="col-4">
              <span>Cụm rạp :</span>
            </div>
            <div className="col-8 text-right font-weight-bold">
              <span> {thongTinPhongVe.thongTinPhim.tenCumRap}</span>
            </div>
          </div>
        </div>
        <div className="only__theater">
          <div className="row">
            <div className="col-6">
              <span>Rạp :</span>
            </div>
            <div className="col-6 text-right font-weight-bold">
              <span>{thongTinPhongVe.thongTinPhim.tenRap}</span>
            </div>
          </div>
        </div>
        <div className="chair">
          <div className="row">
            <div className="col-2">
              <span>Ghế :</span>
            </div>
            <div className="col-10 text-right font-weight-bold ghe__choice">
              <span className="row"> {this.renderGheDangChon()}</span>
            </div>
          </div>
        </div>
        <div className="thanh__toan">
          <button
            disabled={check}
            onClick={() => {
              Swal.fire({
                title: "Bạn muốn đặt vé ?",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Đồng ý",
                cancelButtonText: "Hủy",
              }).then((result) => {
                if (result.value) {
                  this.props.bookingTicketApi(
                    thongTinPhongVe.thongTinPhim.maLichChieu,
                    gheDangChon,
                    this.props.history
                  );
                  Swal.fire("Đã đặt vé thành công");
                  // window.location.reload();

                  // quay laji trang home
                } else {
                  Swal.fire("Đặt vé thất bại !");
                  this.props.history.push("/");
                  // reload lại trang
                }
              });
            }}
          >
            Thanh Toán
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gheDangChon: state.bookingReducer.gheDangChon,
    thongTinPhongVe: state.bookingReducer.data,
  };
};
const mapDispatchToProps = (distpatch) => {
  return {
    bookingTicketApi: (id, list, history) => {
      distpatch(actBookingTicketApi(id, list, history));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Infobooking);
