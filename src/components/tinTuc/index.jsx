import React, { Component } from "react";
import "./style.css";

export default class TinTuc extends Component {
  render() {
    return (
      <div className="movie__news" id="tinTuc">
        <div className="my__news">
          <ul
            className="nav news__navigation nav-pills mb-3"
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
                Điện Ảnh 24h
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
                Review
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Khuyến Mãi
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
              <div className="dien__Anh">
                <div className="row top__news">
                  <div className="col-12 col-sm-6">
                    <a href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh">
                      <img
                        src="/img/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg"
                        alt=" hinh anh"
                      />
                      <p>
                        "Bóc tem" tổ hợp giải trí mới toanh của giới Hà Thành
                      </p>
                    </a>
                    <p>
                      Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống
                      ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai
                      trương tại 360 Giải Phóng!
                    </p>
                  </div>
                  <div className="col-12 col-sm-6">
                    <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                      <img
                        src="/img/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png"
                        alt=" hinh anh"
                      />
                      <p>
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                        công chiếu
                      </p>
                    </a>
                    <p>
                      Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                      lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé.
                      Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ
                      đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng
                    </p>
                  </div>
                </div>
                <div className="row bottom__news">
                  <div className="col-lg-4 col-md-6">
                    <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                      <img
                        src="/img/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg"
                        alt=" hinh anh"
                      />
                      <p>
                        Ngô Thanh Vân bắt tay thực hiện cùng đạo diễn Việt Max
                      </p>
                    </a>
                    <p>
                      Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
                      chính thức phát động cuộc thi...
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                      <img
                        src="/img/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                        alt=" hinh anh"
                      />
                      <p>
                        [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                      </p>
                    </a>
                    <p>
                      Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
                      những mảng tối của xã hội...
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png"
                            alt="hinhAnh"
                          />
                          Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim...
                        </p>
                      </a>
                    </div>
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png"
                            alt="hinhAnh"
                          />
                          Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                          Christopher...
                        </p>
                      </a>
                    </div>{" "}
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png"
                            alt="hinhAnh"
                          />
                          Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                          phòng vé'...
                        </p>
                      </a>
                    </div>{" "}
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png"
                            alt="hinhAnh"
                          />
                          6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                          đình...
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="dien__Anh">
                <div className="row top__news">
                  <div className="col-12 col-sm-6">
                    <a href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh">
                      <img
                        src="/img/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                        alt=" hinh anh"
                      />
                      <p>
                        Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên
                        kết
                      </p>
                    </a>
                    <p>
                      Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ
                      Ám!
                    </p>
                  </div>
                  <div className="col-12 col-sm-6">
                    <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                      <img
                        src="/img/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                        alt=" hinh anh"
                      />
                      <p>Review: Dinh Thự Oan Khuất (Ghost Of War)</p>
                    </a>
                    <p>
                      Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự
                      Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
                    </p>
                  </div>
                </div>
                <div className="row bottom__news">
                  <div className="col-lg-4 col-md-6">
                    <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                      <img
                        src="/img/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                        alt=" hinh anh"
                      />
                      <p>
                        ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
                      </p>
                    </a>
                    <p>
                      Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019
                      của đạo diễn...
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                      <img
                        src="/img/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                        alt=" hinh anh"
                      />
                      <p>American Sniper - Chính nghĩa hay phi nghĩa?</p>
                    </a>
                    <p>
                      American Sniper khắc họa một tay súng bắn tỉa “huyền
                      thoại” của Hải quân Mỹ với 4 lần...
                    </p>
                  </div>
                  <div className="col-4">
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/review-spider-man-into-the-spider-vesre-15886520889426.png"
                            alt="hinhAnh"
                          />
                          Review: Spider-Man: Into The Spider-Vesre
                        </p>
                      </a>
                    </div>
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
                            alt="hinhAnh"
                          />
                          COVID-19 là bản chính thức của MEV-1 phim contagion
                          (2011)
                        </p>
                      </a>
                    </div>{" "}
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                            alt="hinhAnh"
                          />
                          [[Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa
                          bao giờ...
                        </p>
                      </a>
                    </div>{" "}
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                            alt="hinhAnh"
                          />
                          [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ
                          Siêu...
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="dien__Anh">
                <div className="row top__news">
                  <div className="col-12 col-sm-6">
                    <a href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh">
                      <img
                        src="/img/bhd-59k-ve-ca-tuan-16088081864967.jpg"
                        alt=" hinh anh"
                      />
                      <p>BHD 59K/VÉ CẢ TUẦN !!!</p>
                    </a>
                    <p>
                      Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với
                      giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên
                      ZaloPay.
                    </p>
                  </div>
                  <div className="col-12 col-sm-6">
                    <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                      <img
                        src="/img/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                        alt=" hinh anh"
                      />
                      <p>TIX 1K/VÉ NGẠI CHI GIÁ VÉ</p>
                    </a>
                    <p>
                      Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm
                      02 voucher thanh toán ZaloPay thả ga
                    </p>
                  </div>
                </div>
                <div className="row bottom__news">
                  <div className="col-lg-4 col-md-6">
                    <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                      <img
                        src="/img/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png"
                        alt=" hinh anh"
                      />
                      <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</p>
                    </a>
                    <p>
                      ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và
                      Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé
                      qua TIX.
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                      <img
                        src="/img/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
                        alt=" hinh anh"
                      />
                      <p>BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</p>
                    </a>
                    <p>
                      Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với
                      giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay
                      hoặc Mục Vé Phim trên ZaloPay.
                    </p>
                  </div>
                  <div className="col-4">
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
                            alt="hinhAnh"
                          />
                          Beta Cineplex trở lại với hàng loạt ưu đãi lớn
                        </p>
                      </a>
                    </div>
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg"
                            alt="hinhAnh"
                          />
                          [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé
                          Anh...
                        </p>
                      </a>
                    </div>{" "}
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                            alt="hinhAnh"
                          />
                          [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé
                          Pháp...
                        </p>
                      </a>
                    </div>{" "}
                    <div className="mini__news">
                      <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                        <p>
                          <img
                            src="/img/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                            alt="hinhAnh"
                          />
                          [Mega GS] Một đoá hoa thay ngàn lời yêu
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
