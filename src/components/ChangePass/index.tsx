import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import { changePass } from "../../services/resetPasswordServices";
import {ParamTypes} from '../../types/componentTypes'
import useStyles from "./styles";

const ChangePass = () => {
  const param = useParams<ParamTypes>();
  const classes = useStyles();
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("Please enter your new password");

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const update = {
      newPassword: password,
    };
    const token = `bearer ${param.token}`;
    const config = {
      headers: {
        authorization: token,
      },
    };
    await changePass(update, config).then((response) => {
      if (response) {
        setInfo("Password successfully changed!!");

        setTimeout(() => {
          history.push("/login");
        }, 3000);
      }
    });
    return false;
  };

  return (
    <Paper className={classes.root} elevation={4}>
      <form onSubmit={handleClick} className={classes.form}>
        <h3 className={classes.heading}>Password Change</h3>
        <p className={classes.text}>{info}</p>
        <TextField
          className={classes.input}
          label="Password"
          variant="outlined"
          color="primary"
          required
          type="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <TextField
          className={classes.input}
          label="Re-Password"
          variant="outlined"
          color="primary"
          required
          type="password"
        />
        <button type="submit" className={classes.sendBtn}>
          Change
        </button>
      </form>
    </Paper>
  );
};

export default React.memo(ChangePass);
