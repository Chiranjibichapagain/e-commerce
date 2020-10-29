import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
    margin:'0px auto 400px auto',
    padding: "10px 150px",
    display: 'flex',
    flexDirection: 'column',
     alignItems:'center'
    },
    image: {
        width:'200px'
    },
    text: {
        marginTop: '35px',
        marginBottom:'opx'
    },
     backArrow: {
    fontSize: '50px',
    margin: "50px 0px 0px 0px",
    cursor:'pointer'
  },


    "@media only screen and (max-width: 768px)": {
        paper: {
          padding:'10px 20px'
      }
  },
}));

export default useStyles;
