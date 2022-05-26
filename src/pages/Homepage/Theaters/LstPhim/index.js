/* eslint-disable no-unused-expressions */
import React, { memo } from "react";
import useStyles from "./style";

import ThoiLuongDanhGia from "../../../../components/ThoiLuongDanhGia/thoiLuongDanhGia";
import { customScrollbar } from "../../../../styles/materialUi";
import { underLine } from "../../../../styles/materialUi";
import LstNgayChieu from "./LstNgayChieu/";
import { DATE_BEGIN_DANGCHIEU } from "../../../../constants/config";

function Index(props) {
  const classes = useStyles({ customScrollbar, underLine });
  // const mangChiChuaNgay = props.lstPhim
  //   .filter(
  //     (data) => data.ngayChieuGioChieu.slice(0, 10) > DATE_BEGIN_DANGCHIEU
  //   )
  //   .map((item) => {
  //     // tạo mảng mới chỉ chứa ngày

  //     return item.ngayChieuGioChieu.slice(0, 10);
  //   });

  const abc = props.lstPhim.map((phim) =>
    phim.lstLichChieuTheoPhim
      .filter(
        (data) => data.ngayChieuGioChieu.slice(0, 10) > DATE_BEGIN_DANGCHIEU
      )
      .map((item) => {
        return item.ngayChieuGioChieu.slice(0, 10), props.lstPhim;
      })
  );
  const MangNgayKhongTrungLap = [...new Set(abc)];
  console.log(MangNgayKhongTrungLap);
  return (
    <div className={classes.lstPhim} hidden={props.hidden}>
      {props.lstPhim.map((phim) => (
        <>
          <div className={classes.phim} key={phim.maPhim}>
            <div className={classes.phim__info}>
              <img
                src={phim.hinhAnh}
                className={classes.phim__img}
                alt={phim.tenPhim}
              />
              <div className={classes.phim__text}>
                <p className={classes.phim__text_name}>{phim.tenPhim}</p>
                <ThoiLuongDanhGia maPhim={phim.maPhim} />
              </div>
            </div>

            <div>
              <LstNgayChieu lstLichChieuTheoPhim={phim.lstLichChieuTheoPhim} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
export default memo(Index);

// {phim.lstLichChieuTheoPhim
//   .filter(
//     (data) =>
//       data.ngayChieuGioChieu.slice(0, 10) > DATE_BEGIN_DANGCHIEU
//   )
//   .map((item) => {
//     console.log(item, "342");
//   })}
