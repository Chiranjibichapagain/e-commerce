import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyle from "./styles";

const UserLogin = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.root} elevation={4}>
      <Typography className={classes.heading} variant="h4">
        Log In
      </Typography>
      <form className={classes.form}>
        <TextField
          className={classes.input}
          label="Email"
          variant="outlined"
          color="primary"
          required
        />
        <TextField
          className={classes.input}
          label="Password"
          variant="outlined"
          color="primary"
          required
        />

        <Button className={classes.button} variant="outlined">
          Log in
        </Button>
      </form>
      <Typography className={classes.footer}>
        Don't have an account ?{" "}
        <span className={classes.register}>Register</span>
      </Typography>
    </Paper>
  );
};

export default UserLogin;
