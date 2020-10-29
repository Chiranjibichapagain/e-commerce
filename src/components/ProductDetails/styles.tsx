import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 250px",
  },

  backArrow: {
    fontSize: '50px',
    margin: "50px",
    cursor:'pointer'
  },

  image: {
    width: "500px",
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
    borderLeft: "0.7px solid #A0A0A0",
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

  actions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  cart: {
    width: "50px",
    height: "50px",
    padding: "10px",
    borderRadius: "50%",
    border: "2px solid orangered",
    color: "green",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
