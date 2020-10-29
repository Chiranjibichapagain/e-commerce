import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100vw",
    backgroundColor: "RGBA(255,255,255,0.9)",
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    boxShadow: "0px 0px 2px black",
    padding:'0px 10px'
  },

  noPaper: {
    display: "none",
  },

  form: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0px",
  },
  categoryLabel: {
    color: "blue",
    marginBottom: "10px",
  },
  categoryBox: {
    width: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dropDown: {
    width: "200px",
    height: "35px",
    borderRadius: "4px",
    backgroundColor: "white",
    border: "1.5px solid green",
  },
  priceLabel: {
    color: "blue",
    textAlign: "center",
    marginBottom: "10px",
  },

  priceBox: {
    width: "350px",
    margin: "0px 50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  slider: {},
  button: {
    width: "120px",
    height: "45px",
    border: "none",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "white",
      border: "1px solid orangered",
      color: "orangered",
    },
  },

  "@media screen and (max-width: 768px)": {
    categoryBox: {
      width:'120px'
    },
    dropDown: {
      width:'100px'
    },
    
    priceBox: {
      width: '100px',
      margin:'0px 20px'
    },
    button: {
      width:'80px'
    }
  },
}));

export default useStyles;
