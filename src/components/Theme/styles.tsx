import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "7em",
    backgroundColor: "#E0E0E0",
    color: theme.palette.primary.main,
    display: "flex",
    padding: "0.4em 1em",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  icon: {
    color: "grey",
  },

  themeText: {
    display: "block",
  },

  themeList: {
    width: "190px",
    position: "absolute",
    top: "100px",
    left: "1110px",
    backgroundColor: "#E0E0E0",
    display: "flex",
    alignItems: "center",
  },

  redButton: {
    backgroundColor: "none",
    padding: "13px 0px",
    borderRadius: "4px 0px 0px 4px",

    "&:hover": {
      backgroundColor: "#E55328",
      color: "white",
    },
  },
  greenButton: {
    backgroundColor: "none",
    padding: "13px 0px",
    borderRadius: "0px",

    "&:hover": {
      backgroundColor: "#71AA5F",
      color: "white",
    },
  },
  blueButton: {
    backgroundColor: "none",
    padding: "13px 0px",
    borderRadius: "0px 4px 4px 0px",

    "&:hover": {
      backgroundColor: "#455CD3",
      color: "white",
    },
  },

  "@media screen and (max-width: 768px)": {
    themeText: {
      display: "none",
    },
    paper: {
      display:'none'
      // padding: "0.8em 0.6em",
      // width: "1.5em",
    },
    themeList: {
      width: "4em",
      flexDirection: "column",
      justifyContent: "cen",
    },
  },
}));

export default useStyles;
