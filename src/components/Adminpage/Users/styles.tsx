import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  table: {
    width: "80vw",
    margin: "auto",
  },

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
