import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 80px",
  },
  logo: {
    margin: "20px 0px",
    width: "50px",
    cursor:'pointer',
  },
  search: {
    width: "400px",
  },

  sortDiv: {
    cursor: "pointer",
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
  },
  sortBtn: {
    fontSize: "40px",
    color: "orangered",
  },
  sortText: {
    margin: "0px",
  },
  key: {
    fontSize:'35px'
  },
  profileDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  profileIcon: {
    fontSize: "40px",
  },

  profileName: {
    fontSize: "18px",
    color: "orangered",
    margin: "0px",
  },

  loginText: {
    margin: "0px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  logoutIcon: {
    marginTop: "10px",
    cursor: "pointer",
  },
  cartDiv: {
    width: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  cartCount: {
    color: "green",
  },

  cart: {
    fontSize: "40px",
    color: "orangered",
  },

  modal: {
    width: "50vw",
    margin: " 110px auto",
    backgroundColor: "white",
    boxShadow: "0px 0px 3px black",
    borderRadius: '10px',
    outline:'none'
  },

  "@media only screen and (max-width: 768px)": {
    modal: {
      width: '98vw',
      borderRadius:'0px'
    },
    root: {
      padding:'0px 20px'
    },
    logo: {
      width:'30px'
    },
    search: {
      width:'80px'
    },
    sortDiv: {
      height:'50px'
    },
    sortBtn: {
      width: '20px',
    },
    sortText: {
      fontSize:'10px'
    },
    cart: {
      fontSize:'20px'
    },
    cartCount: {
      fontSize:'16px'
    },
    cartDiv: {
      width:'30px'
    },
    profileIcon: {
      fontSize:'20px'
    },
    profileName: {
      fontSize:'12px'
    },
    logoutIcon: {
      fontSize:'18px'
    },
    loginText: {
      fontSize:"12px"
    }
  },
}));

export default useStyles;
