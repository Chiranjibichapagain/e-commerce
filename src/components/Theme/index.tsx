import React, { useState, useContext } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import InvertColorsIcon from "@material-ui/icons/InvertColors";

import { ThemeContext } from "../contextAPI/context";
import useStyles from "./styles";

const Theme = () => {
  const classes = useStyles();
  const { setTheme } = useContext(ThemeContext);

  const themes = {
    default: "grey",
    red: "#E55328",
    green: "#71AA5F",
    blue: "#458BD3",
  };

  const changeTheme = (color: string) => {
    switch (color) {
      case "red":
        setTheme(themes.red);
        break;
      case "green":
        setTheme(themes.green);
        break;
      case "blue":
        setTheme(themes.blue);
        break;
      default:
        setTheme(themes.default);
    }
  };

  const [style, setStyle] = useState({ display: false });

  const handleDisplay = () => {
    setStyle((prevState) => ({
      display: !prevState.display,
    }));
  };

  return (
    <Paper onClick={() => handleDisplay()} className={classes.paper}>
      <InvertColorsIcon className={classes.icon} />
      <Typography className={classes.themeText} variant="h6">
        Themes
      </Typography>
      {style.display && (
        <Paper className={classes.themeList}>
          <Button
            onClick={() => changeTheme("red")}
            className={classes.redButton}
          >
            Red
          </Button>
          <Button
            onClick={() => changeTheme("green")}
            className={classes.greenButton}
          >
            Green
          </Button>
          <Button
            onClick={() => changeTheme("blue")}
            className={classes.blueButton}
          >
            Blue
          </Button>
        </Paper>
      )}
    </Paper>
  );
};

export default React.memo(Theme);
