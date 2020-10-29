import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  th: {
    backgroundColor: "lightblue",
    padding: "20px 0px",
  },

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
