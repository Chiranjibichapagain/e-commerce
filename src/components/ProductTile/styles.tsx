import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "350px",
    borderRadius: "8px",
    margin: " 40px 20px",
    transition: "0.5s ease-in-out",

    "&:hover": {
      boxShadow: "0px 0px 1px black",
    },
  },

  imageBox: {
    display: "flex",
    justifyContent: "center",
    marginButton: "5px",
  },
  image: {
    maxWidth: "350px",
    maxHeight: "150px",
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
    backgroundColor: "#E9E9E9",
    position: "relative",
    top: "28px",
    padding: "20px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  toCartButton: {
    width: "150px",
    backgroundColor: "#299B00",
    border: "none",
    padding: "12px",
    borderRadius: "4px",
    fontWeight: "bold",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "0.3s ease-in-out",

    "&:hover": {
      backgroundColor: "white",
      color: "orangered",
      border: "1px solid orangered",
    },
  },
  viewButton: {
    width: "150px",
    backgroundColor: "#0040C3",
    border: "none",
    padding: "12px",
    borderRadius: "4px",
    fontWeight: "bold",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    transition: "0.3s ease-in-out",

    "&:hover": {
      backgroundColor: "white",
      color: "orangered",
      border: "1px solid orangered",
    },
  },

  "@media only screen and (max-width: 768px)": {
    root: {
      width: "80vw",
    },
  },
}));

export default useStyles
