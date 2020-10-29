import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import { sendChangeRequest } from "../../services/resetPasswordServices";
import useStyles from "./styles";

const ForgetPass = () => {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState(
    "Please provide your email associated with us. we will send a link to change password"
  );

  const handleClick = async () => {
    const user = {
      email: email,
    };
    await sendChangeRequest(user).then((response) => {
      if (response) {
        setInfo(response.data);
      }
      history.push("/");
    });
  };

  return (
    <Paper className={classes.root} elevation={4}>
      <form onSubmit={() => handleClick()} className={classes.form}>
        <h3 className={classes.heading}>Forget Password</h3>
        <p className={classes.text}>{info}</p>
        <TextField
          className={classes.input}
          label="Email"
          variant="outlined"
          color="primary"
          required
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <button type="submit" className={classes.sendBtn}>
          Send
        </button>
      </form>
    </Paper>
  );
};

export default React.memo(ForgetPass);
