import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    date: {
     color:'orangered'
    },
    
    mainDiv: {
        padding: '10px',
        margin: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '6px',
        boxShadow:'0px 0px 3px grey'
    },
    dateDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-start'
    },
    pidDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-start'
    },
    countDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-start'
    },
    heading: {
        fontWeight: 'bolder',
        marginBottom:'15px'
    },
    text:{},

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
