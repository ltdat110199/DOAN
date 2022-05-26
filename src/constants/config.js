import { nanoid } from "nanoid";
import { createMuiTheme } from "@material-ui/core/styles";
import { format } from "date-fns";

const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const avtIdUser = currentUser ? currentUser?.avtIdUser : nanoid(10);
export { avtIdUser };
export const BASE_URL = "https://movie0706.cybersoft.edu.vn/api";
export const FAKE_AVATAR = `https://i.pravatar.cc/300?u=${avtIdUser}`;
export const UNKNOW_USER = "/img/unknowUser.png";
export const DISPLAY_MOBILE_BOOKTICKET = "(max-width:768px)";
export const DISPLAY_MOBILE_THEATER = "(max-width:678px)";
export const HIDDEN_SEARCHTICKET = "(max-width:992px)";
export const DISPLAY_MOBILE_HOMEPAGE = "(max-width:736px)";
export const IMG_LOADING = "/img/logoTixLoading.png";

export const DATE_BEGIN_DANGCHIEU = format(
  new Date(new Date() - 60 * 60 * 24 * 1 * 1000),
  "yyyy-MM-dd"
); // format: yyyy-mm-dd

export const DATE_END_DANGCHIEU = format(
  new Date(new Date() + 60 * 60 * 24 * 5 * 1000),
  "yyyy-MM-dd"
);

export const DATE_BEGIN_SAPCHIEU = format(
  new Date(new Date() + 60 * 60 * 24 * 3 * 1000),
  "yyyy-MM-dd"
);
export const DATE_END_SAPCHIEU = new Date().toISOString()?.slice(0, 10);
//

export const BEGIN_DANGCHIEU = format(
  new Date(new Date() - 60 * 60 * 24 * 10 * 1000),
  "yyyy-MM-dd"
); // format: yyyy-mm-dd

export const END_DANGCHIEU = format(
  new Date(new Date() + 60 * 60 * 24 * 5 * 1000),
  "yyyy-MM-dd"
);

export const BEGIN_SAPCHIEU = format(
  new Date(new Date() + 60 * 60 * 24 * 3 * 1000),
  "yyyy-MM-dd"
);
export const END_SAPCHIEU = "2023-12-02";

// new Date().toISOString()?.slice(0, 10);
export const arrayGiaVe = [75000, 100000, 120000, 150000];

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 678,
      md: 736,
      lg: 768,
      xl: 992,
    },
  },
});
