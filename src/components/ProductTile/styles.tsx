import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "350px",
    borderRadius: "8px",
    margin: " 10px 20px 60px 20px",
    transition: "0.5s ease-in-out",

    "&:hover": {
      boxShadow: "0px 0px 1px black",
    },
  },

  imageBox: {
    maxWidth: "350px",
    maxHeight: "400px",
    padding: "30px",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    minHeight: "170px",
    maxHeight: "170px",
    maxWidth: "200px",
    transition: "0.5s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  info: {
    margin: "30px 10px 10px 10px",
    borderTop: "1.5px solid grey",
    padding: "15px 10px",
    display: "flex",
    justifyContent: "space-between",
  },
  name: {
    fontSize: "18px",
  },

  price: {
    fontWeight: "bold",
  },

  description: {
    padding: "10px 15px",
  },

  actions: {
    borderRadius: "0px 0px 6px 6px",
    backgroundColor: "#C9C9C9",
    position: "relative",
    top: "28px",
    padding: "20px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  disabledBtn: {
    backgroundColor: "#B7C7B2",
    border: "none",
    padding: "12px",
    borderRadius: "4px",
    fontWeight: "bold",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    
  },

  toCartButton: {
    backgroundColor: "#299B00",
    border: "none",
    padding: "12px",
    borderRadius: "4px",
    fontWeight: "bold",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.3s ease-in-out",

    "&:hover": {
      backgroundColor: "white",
      color: "orangered",
      // border: "1px solid orangered",
    },
  },
  viewButton: {
    backgroundColor: "#0040C3",
    border: "none",
    padding: "12px",
    borderRadius: "4px",
    fontWeight: "bold",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.3s ease-in-out",

    "&:hover": {
      backgroundColor: "white",
      color: "orangered",
      // border: "1px solid orangered",
    },
  },
  btnText: {
    padding: "0px 0px 0px 10px",
  },

  "@media only screen and (max-width: 768px)": {
    root: {
      width: "100vw",
    },
    btnText: {
      display: "none",
    },
    toCartButton: {
      padding:'12px 36px'
    },
    viewButton: {
      padding:'12px 36px'
    },
    image: {
      maxWidth:'150px'
    }
  },
}));

export default useStyles
