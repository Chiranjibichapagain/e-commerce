import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  loading: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "100px",
  },

  addBtn: {
    position: "fixed",
    bottom: "10px",
    right: "120px",
    fontSize: "40px",
    backgroundColor: "rgb(255,255,255, 0.9)",
    width: "70px",
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6px",
    boxShadow: "0px 0px 3px green",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
      fontSize: "55px",
    },
  },

  modal: {
    backgroundColor: "rgb(255, 255, 255, 0.9)",
    width: "900px",
    display: "block",
    margin: "20px auto",
    boxShadow: "0px 0px 3px black",
    padding: "20px",
    borderRadius: "10px",
    outline:'none',
  },

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
