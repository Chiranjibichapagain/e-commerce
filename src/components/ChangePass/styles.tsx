import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
    display: "block",
    margin: "20px auto",
    padding: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 20px 20px 20px",
  },
  heading: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },

  input: {
    width: "350px",
    margin: "20px",
    fontSize: "16px",
  },

  sendBtn: {
    width: "300px",
    height: "45px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "green",
    color: "white",
    fontSize: "18px",
    transition: "0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "orangered",
    },
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
