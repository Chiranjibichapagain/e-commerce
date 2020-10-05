import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 80px",
  },
  logo: {
    fontSize: "100px",
    margin: "0px",
    color: "orangered",
  },
  search: {
    width: "400px",
  },

  sortDiv: {
    cursor: "pointer",
  },
  sortBtn: {
    fontSize: "40px",
    color: "orangered",
  },
  sortText: {
    margin: "0px",
  },
  profile: {
    fontSize: "50px",
    cursor: "pointer",
    color: "orangered",
  },
  cartDiv: {
    width: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  cartCount: {
    color: "green",
  },

  cart: {
    fontSize: "40px",
    color: "orangered",
  },

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
