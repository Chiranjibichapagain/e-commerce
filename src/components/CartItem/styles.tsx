import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 
  itemList: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    boxShadow: "0px -0.5px 0px black",
  },
  image: {
    width: "50px",
  },
    name: {
      width:"300px"
  },
    price: {
      width:'70px'
  },
  countDiv: {
    display: 'flex',
    alignItems:'center',
  },
  count: {
    width: '30px',
    height: "20px",
    marginLeft:"10px",
    borderRadius: '4px',
    border: '1px solid green',
    color:'blue'
  },

  delete: {
    color: "red",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },

  checkout: {
    
  },

  "@media only screen and (max-width: 768px)": {
    itemList: {
      width: '90vw',
      padding: '0px',
      boxShadow: 'none',
      borderTop: '1px solid grey',
      flexWrap:'warp'
    },
    image: {
      display:'none'
    },
    name: {
      width:'120px',
      margin: '0px 10px',
      fontSize:'14px'
    },
    count: {
      margin:'0px 10px'
    },
    totalPrice: {
      fontSize:'10px'
    }
    
  },
}));

export default useStyles;
