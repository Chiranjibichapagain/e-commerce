import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'purple',
    padding: '20px',
  },
  root: {
    width: "500px",
    display: "block",
    padding: "10px",
    margin: 'auto',
    borderRadius:'10px'
  },

  heading: {
    textAlign: "center",
    padding: "20px 0px",
  },

  google: {
    display: "flex",
    justifyContent: "center",
  },

  or: {
    margin: "20px 0px 0px 0px",
    textAlign: "center",
  },

  error: {
    textAlign: "center",
    color: "red",
    marginBottom: "0px",
  },
  info: {
    textAlign: "center",
    color: "blue",
    marginBottom: "0px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 20px 20px 20px",
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
