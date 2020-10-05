import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
    height: "40px",
  },

  closeBtn: {
    margin: "0px 0px 0px 0px",
    color: "orangered",
    cursor: "pointer",
    fontSize: "25px",
    transition: "0.4s ease-in-out",
    "&:hover": {
      fontSize: "28px",
      color: "green",
    },
  },

  checkoutBtn: {
    backgroundColor: "orangered",
    borderStyle: "none",
    borderRadius: "4px",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s ease-in-out",

    "&:hover": {
      backgroundColor: "white",
      color: "orangered",
      border: "1px solid orangered",
    },
  },

  image: {
    width: "400px",
  },

  infoBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  details: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderLeft: "2px solid grey",
    paddingLeft: "25px",
  },

  name: {
    textAlign: "center",
    margin: "0px 0px 10px 0px ",
  },

  price: {
    alignSelf: "center",
    color: "green",
    border: "1.5px solid green",
    padding: "7px",
    borderRadius: "6px",
  },

  desc: {
    lineHeight: "1.6",
  },
  sizeHeading: {
    margin: "0px",
  },
  size: {},
  category: {},
  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
