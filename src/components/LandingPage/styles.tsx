import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 
  root: {
    width: "80vw",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
  },

  pagination: {
    width: "70vw",
    margin: "auto",
    display: "flex",
    justifyContent: "flex-end",
  },
  page: {
    width: "30px",
    height: "30px",
    margin: "10px 5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "white",
    color: "green",
    transition: "0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#7B33FF",
      color: 'white',
    },
  },

  "@media only screen and (max-width: 768px)": {
    root: {
      width:'100vw'
    }
  },
}));

export default useStyles;
