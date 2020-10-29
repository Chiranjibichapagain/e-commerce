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
    width: "550px",
    textAlign: "center",
    margin: "0px",
    paddingRight: "20px",
  },

  form: {
    display: "flex",
    flexDirection:'column',
    alignItems:"center"
  },

  input: {
    width: "400px",
    margin: "20px",
    fontSize: "16px",
  },
  eInput: {
    width: "400px",
    margin: "20px",
    fontSize: "16px",
  },
  error: {
    color: 'red',
    fontSize:'14px'
  },

  switches: {
    width: "350px",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },

  button: {
    width: "200px",
    margin: "40px 50px 0px 50px",
    padding: "15px 0px",
    backgroundColor: `${theme.palette.primary.main}`,
    color: "white",
    border: 'none',
    borderRadius:'4px',
    fontWeight: "bold",
    transition:'0.3s ease-in-out',

    "&:hover": {
      color: "orangered",
      backgroundColor:'white',
      border:'1px solid orangered'
    },
  },

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
