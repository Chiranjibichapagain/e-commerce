import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tr: {
    // "&:nth-child(odd)": {
    //   backgroundColor: "#E0E0E0",
    // },

    boxShadow: "0px 1px 5px #6E6E6E",
    "&:hover": {
      boxShadow: "0px 1px 1px #6E6E6E",
    },
  },
  image: {
    width: "40px",
    padding: "10px",
  },

  name: {
    width: "180px",
    padding: "15px ",
    textAlign: "center",
  },
  desc: {
    padding: "15px ",
    textAlign: "center",
  },
  price: {
    width: "80px",
    padding: "15px ",
    textAlign: "center",
  },
  category: {
    width: "100px",
    padding: "15px ",
    textAlign: "center",
  },
  sizes: {
    listStyle: "none",
    padding: "15px ",
    textAlign: "center",
  },

  actions: {
    width: "120px",
    display: "flex",
    padding: "20px 15px 5px 15px ",
    justifyContent: "center",
    alignItems: "center",
  },

  editIcon: {
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

  modal: {
    backgroundColor: "rgb(255, 255, 255, 0.9)",
    width: "900px",
    display: "block",
    margin: "20px auto",
    boxShadow: "0px 0px 3px black",
    padding: "20px",
    borderRadius: "8px",
  },

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
