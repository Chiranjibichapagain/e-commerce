import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    width: "40px",
  },

  sizes: {
    listStyle: "none",
  },

  actions: {
    display: "flex",
  },

  editIcon: {
    padding: "5px",
    boxShadow: "0px 0px 3px black",
    borderRadius: "5px",
    marginRight: "10px",
    color: "blue",
  },
  deleteIcon: {
    padding: "5px",
    boxShadow: "0px 0px 3px black",
    borderRadius: "5px",
    color: "red",
  },

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
