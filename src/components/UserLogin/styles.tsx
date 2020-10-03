import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
    display: "block",
    margin: "20px auto",
    padding: "10px",
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
    margin: "40px 50px 0px 50px",
    padding: "10px 0px",
    backgroundColor: `${theme.palette.primary.main}`,
    color: "white",
    fontWeight: "bold",

    "&:hover": {
      color: "orangered",
    },
  },

  footer: {
    textAlign: "center",
    marginBottom: "15px",
  },
  register: {
    color: "#4B18B8",
  },

  "@media only screen and (max-width: 768px)": {
    root: {
      boxShadow: "none",
      width: "100vw",
      margin: "0",
      padding: "0",
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
    footer: {
      marginTop: "15px",
    },
  },
}));

export default useStyles;
