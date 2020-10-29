import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
    margin:'50px auto 400px auto',
    padding: "10px 150px",
    display: 'flex',
    flexDirection: 'column',
     alignItems:'center'
    },
    image: {
        width:'200px'
    },
    text: {
        marginTop:'35px'
    },

    "@media only screen and (max-width: 768px)": {
        paper: {
            width: '100vw',
            padding:'10px'
        },
        image: {
            width:'150px'
        },
        text: {
            fontSize:'18px'
        }
  },
}));

export default useStyles;
