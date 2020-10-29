import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width:'730px',
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  pTop: {
    width: "730px",
    display: "flex",
  },
  close: {
    width: "20px",
    margin: "0px 0px 10px 0px",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    "&:hover": {
      color: "green",
    },
  },

  heading: {
    width: "700px",
    textAlign: "center",
    margin: "0px 0px 30px 0px",
    paddingRight: "20px",
    color: "blue",
  },

  info: {
    width:'730px',
    textAlign: 'center',
    color:'orangered'
  },

  actions: {
    display: 'flex',
    justifyContent: 'center',
    borderTop: '2.5px solid grey',
    padding: '20px 0px 0px 100px',
    marginTop:'20px'
  },

  total: {
    width: '170px',
    padding:'12px 20px',
    textAlign: 'right',
    marginLeft:'100px',
    fontSize: "20px",
    fontWeight:'bold'
  },
  
  checkout: {
    width: '120px',
    borderStyle: "none",
    backgroundColor: "green",
    borderRadius: "5px",
    fontSize:'16px',
    color: "white",
    cursor:'pointer',
    transition: "0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "white",
      border: "0.5px solid orangered",
      color: "green",
    },
   
  },

  "@media only screen and (max-width: 768px)": {
    root: {
      width:'90vw'
    },
     pTop: {
      width:'100vw'
    },
     heading: {
       width: '100vw',
       fontSize:"16px"
    },
     info: {
       width: '100vw',
       fontSize:'12px'
    },
     
    actions: {
      width: '90vw',
      padding:'10px 0px'
    },
    
    total: {
      padding: '10px',
      fontSize:'14px'
    }
    
  },
}));

export default useStyles;
