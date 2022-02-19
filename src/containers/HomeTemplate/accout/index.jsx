import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import { actAccoutrApi } from "./modules/action";
import Loading from "./../../../components/Loading";
function Accout(props) {
  useEffect(() => {
    props.accoutApi();
  }, []);
  const { loading, data } = props;
  const renderTable = () => {
    if (data) {
      return data.thongTinDatVe.map((item) => {
        // do api trả về sai
        var total = 0;
        total = total + item.danhSachGhe.length * item.giaVe;
        var soGhe = "";
        item.danhSachGhe.forEach((ghe) => {
          soGhe += ` ${ghe.tenGhe} `;
        });
        return (
          <tr key={item.maVe}>
            <td>{item.tenPhim}</td>
            <td>{item.ngayDat}</td>
            <td>{item.giaVe}</td>
            <td>{item.danhSachGhe[0].tenHeThongRap}</td>
            <td>{item.danhSachGhe[0].tenRap}</td>
            <td>{soGhe}</td>
            <td>{total}</td>
          </tr>
        );
      });
    }
  };
  const renderHTML = () => {
    return (
      <div className="accout__table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Tên phim</th>
              <th>Ngày - Giờ đặt vé</th>
              <th>Giá vé</th>
              <th>Hệ thống rạp</th>
              <th>Rạp</th>
              <th>Ghế</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    );
  };
  if (loading) return <Loading />;
  return <div className="my__accout">{renderHTML()}</div>;
}
const mapDispatchToProps = (dispatch) => {
  return {
    accoutApi: () => {
      dispatch(actAccoutrApi());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.accoutReducer.loading,
    data: state.accoutReducer.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Accout);
