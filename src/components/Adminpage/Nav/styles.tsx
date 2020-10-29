import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    borderRadius: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 80px",
  },
  logo: {
    width: '50px',
    margin:"20px 0px"

  },
  itemDiv: {
    width: "200px",
    display: "flex",
    justifyContent: "space-between",
  },
  item: {
    fontSize: "20px",
    padding: "9px",
    border: "0.5px solid black",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    "&:hover": {
      border: "none",
      backgroundColor: "lightblue",
    },
  },

  search: {
    width: "400px",
  },

  profileDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  profile: {
    color: "orangered",
    margin: "5px",
  },

  profileText: {
    margin: "0px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  "@media only screen and (max-width: 768px)": {},
}));

export default useStyles;
