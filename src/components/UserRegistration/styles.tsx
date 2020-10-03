import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
    display: "block",
    margin: "20px auto",
  },
  heading: {
    textAlign: "center",
    paddingTop: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },

  input: {
    marginTop: "20px",
    fontSize: "16px",
  },
  button: {
    margin: "40px 50px 20px 50px",
    padding: "10px 0px",
    backgroundColor: `${theme.palette.primary.main}`,
    color: "white",
    fontWeight: "bold",

    "&:hover": {
      color: "orangered",
    },
  },

  "@media only screen and (max-width: 768px)": {
    root: {
      boxShadow: "none",
      width: "100vw",
      margin: "0",
    },
    heading: {
      fontSize: "25px",
      padding: "0",
    },
    form: {
      padding: "0",
      alignItems: "center",
    },
    input: {
      width: "90vw",
    },
    button: {
      margin: "20px 0px 0px 0px",
      width: "90vw",
    },
  },
}));

export default useStyles;
