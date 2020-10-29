import React, { useState, useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { ThemeContext } from "../contextAPI/context";
import { login } from "../../services/loginServices";
import { signGoogle } from "../../services/googleLoginServices";
import backgroundImage from '../../ASSETS/stuffs.jpg'
import useStyle from "./styles";

const UserLogin = () => {
  const history = useHistory();
  const classes = useStyle();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feed, setFeed] = useState("All fields are required.");

  const { setInfo } = useContext(ThemeContext);

  const handleLogin = async () => {
    try {
      const user = {
        email: email,
        password: password,
      };
      await login(user).then((response) => {
        if (response) {
          localStorage.setItem("loginInfo", JSON.stringify(response));
          setInfo(response);
          if (response.admin) {
            history.push("/admin");
          } else {
            history.push("/");
          }
        }
      });
    } catch (error) {
      setFeed(error.response.data.error);
      setTimeout(() => {
        setFeed("All fields are required.");
      }, 5000);
    }
  };

  const responseSuccessGoogle = async (response: any) => {
    await signGoogle({ id_token: response.tokenObj.id_token }).then((response:any) => {
      if (response) {
        localStorage.setItem("loginInfo", JSON.stringify(response.data));
        setInfo(response.data);
        if (response.data.admin) {
          history.push("/admin");
        } else {
          history.push("/");
        }
      }
    })
  };

  const responseFailGoogle = () => {
    setFeed('Failed to login')
  };
  
  const mainStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }

 
  return (
    <div style={mainStyle} className={classes.main}>
    <Paper className={classes.root} elevation={4}>
      <Typography className={classes.heading} variant="h4">
        Log In
      </Typography>
      <div className={classes.google}>
        <GoogleLogin
          clientId="1080495936618-p9pjdbcgnr2sb0d89dcsksi0fveei6m7.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseFailGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <h4 className={classes.or}>or</h4>
      <p
        className={
          feed && feed.includes("All fields are required.")
            ? classes.info
            : classes.error
        }
      >
        {feed}
      </p>
      <form className={classes.form}>
        <TextField
          className={classes.input}
          label="Email"
          variant="outlined"
          color="primary"
          required
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <TextField
          className={classes.input}
          label="Password"
          variant="outlined"
          color="primary"
          required
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button
          onClick={handleLogin}
          className={classes.button}
          variant="outlined"
        >
          Log in
        </Button>
        <p style={{ color: "black", textAlign: "center" }}>
          Forgot Password?
          <Link to="/forgetpass">
            <span style={{ color: "blue" }}>Change password</span>
          </Link>
        </p>
      </form>
      <Typography className={classes.footer}>
        Don't have an account ?{" "}
        <Link to="/register" style={{ textDecoration: "none" }}>
          <span className={classes.register}>Register</span>
        </Link>
      </Typography>
      </Paper>
    </div>

  );
};;

export default React.memo(UserLogin);
