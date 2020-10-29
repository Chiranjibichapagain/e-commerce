import React, { useState, createContext } from "react";

import { ThemeContextProps } from "../../types/componentTypes";

export const ThemeContext = createContext({} as ThemeContextProps);

export const InfoProvider = (props: any) => {
  const [theme, setTheme] = useState("pink");
  const [info, setInfo] = useState();

  return (
    <ThemeContext.Provider value={{ theme, info, setTheme, setInfo }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
