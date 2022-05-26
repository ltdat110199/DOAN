import React, { Fragment } from "react";

import formatDate from "../../../../../utilities/formatDate";
import BtnGoToCheckOut from "../../../../../components/BtnGoToCheckOut";
import useStyles from "./style";
import { DATE_BEGIN_DANGCHIEU } from "../../../../../constants/config";

export default function LstGioChieu({ lstLichChieuTheoPhim }) {
  const classes = useStyles();

  const mangChiChuaNgay = lstLichChieuTheoPhim
    // .filter(
    //   (data) => data.ngayChieuGioChieu.slice(0, 10) > DATE_BEGIN_DANGCHIEU
    // )
    .map((item) => {
      // tạo mảng mới chỉ chứa ngày

      return item.ngayChieuGioChieu.slice(0, 10);
    });
  const MangNgayKhongTrungLap = [...new Set(mangChiChuaNgay)]; // xóa đi ngày trùng lặp > dùng mảng này để render số phần tử
  const filterByDay = (date) => {
    // lọc ra item từ mảng gốc
    const gioChieuRenDer = lstLichChieuTheoPhim.filter((item) => {
      if (
        item.ngayChieuGioChieu.slice(0, 10) === date
        // &&
        // item.ngayChieuGioChieu.slice(0, 10) > DATE_BEGIN_DANGCHIEU
      ) {
        return true;
      }
      return false;
    });
    return gioChieuRenDer;
  };
  return (
    <div className={classes.lstNgayChieu}>
      {MangNgayKhongTrungLap.map((date) => (
        <Fragment key={date}>
          <p className={classes.ngayChieu}>{formatDate(date).dateFull}</p>{" "}
          {/*in ra ngày hiện tại*/}
          <div className={classes.groupTime}>
            {filterByDay(date).map((lichChieuTheoPhim) => (
              <Fragment key={lichChieuTheoPhim.maLichChieu}>
                <BtnGoToCheckOut lichChieuTheoPhim={lichChieuTheoPhim} />
              </Fragment>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
