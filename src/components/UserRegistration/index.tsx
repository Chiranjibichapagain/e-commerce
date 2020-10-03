import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyle from "./styles";

const UserRegistration = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.root} elevation={4}>
      <Typography className={classes.heading} variant="h4">
        User Registration Form
      </Typography>
      <form className={classes.form}>
        <TextField
          className={classes.input}
          label="First Name"
          variant="outlined"
          color="primary"
          required
        />
        <TextField
          className={classes.input}
          label="Last Name"
          variant="outlined"
          color="primary"
          required
        />
        <TextField
          className={classes.input}
          label="Email"
          variant="outlined"
          color="primary"
          required
        />
        <TextField
          className={classes.input}
          label="Phone Number"
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
        <TextField
          className={classes.input}
          label="Re-Password"
          variant="outlined"
          color="primary"
          required
        />

        <Button className={classes.button} variant="outlined">
          Register
        </Button>
      </form>
    </Paper>
  );
};

export default UserRegistration;
