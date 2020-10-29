import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'column'
  },
  
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

  userName: {
    textAlign: 'center',
    color: 'blue',
    marginTop:'0px',
  },
  noOrderMsg: {
    color: 'orangered',
    textAlign:'center'
  },
 

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
