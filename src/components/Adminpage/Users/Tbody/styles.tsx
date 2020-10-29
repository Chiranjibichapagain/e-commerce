import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tr: {
    boxShadow: "0px 1px 0px black",
    "&:hover": {
      backgroundColor: "#FFDAB7",
    },
  },
  bannedTr: {
    boxShadow: "0px 1px 0px black",
    backgroundColor: "orangered",
    "&:hover": {
      backgroundColor: "#FFDAB7",
    },
  },
  image: {
    width: "40px",
    padding: "10px",
  },

  name: {
    width: "180px",
    padding: "15px ",
    textAlign: "left",
  },
  email: {
    padding: "15px ",
    textAlign: "left",
  },
  orders: {
    width: "120px",
    padding: "15px ",
    textAlign: "left",
  },
  admin: {
    width: "100px",
    padding: "15px ",
    textAlign: "center",
  },
  bann: {
    padding: "15px ",
    textAlign: "left",
  },

  ordersView: {
    backgroundColor: 'green',
    height:'30px',
    border: 'none',
    outline:'none',
    color: 'white',
    borderRadius: '4px',
    cursor:'pointer',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor:'orangered'
    }
  },

  actions: {
    width: "100px",
    display: "flex",
    padding: "20px 15px 5px 15px ",
    justifyContent: "space-between",
    alignItems: "center",
  },

  editIcon: {
    backgroundColor: "white",
    padding: "5px",
    boxShadow: "0px 0px 3px black",
    borderRadius: "5px",
    marginRight: "10px",
    color: "blue",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#80FF8F",
    },
  },
  deleteIcon: {
    backgroundColor: "white",
    padding: "5px",
    boxShadow: "0px 0px 3px black",
    borderRadius: "5px",
    color: "red",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#80FF8F",
    },
  },

  bannIcon: {
    color: "red",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.5)",
    },
  },

  modal: {
    backgroundColor: "rgb(255, 255, 255, 0.9)",
    width: "500px",
    display: "block",
    margin: "20px auto",
    boxShadow: "0px 0px 3px black",
    padding: "20px",
    borderRadius: "10px",
    outline:'none',
  },

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
