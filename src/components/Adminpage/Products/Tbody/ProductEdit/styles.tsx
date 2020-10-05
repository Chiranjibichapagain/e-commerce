import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  actions: {
    display: "flex",
    justifyContent: "space-between",
    height: "40px",
  },

  closeBtn: {
    margin: "0px",
    color: "orangered",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
    transition: "0.2s ease-in-out",
    "&:hover": {
      color: "green",
    },
  },

  heading: {
    width: "950px",
    textAlign: "center",
    margin: "0px",
    paddingRight: "20px",
  },

  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  input: {
    width: "400px",
    margin: "20px",
    fontSize: "16px",
  },

  sizeDiv: {
    width: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px",
  },

  checkBox: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },

  button: {
    width: "200px",
    margin: "40px 50px 0px 50px",
    padding: "10px 0px",
    backgroundColor: `${theme.palette.primary.main}`,
    color: "white",
    fontWeight: "bold",

    "&:hover": {
      color: "orangered",
    },
  },

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
