import React from "react";
import { useState } from "react";

const themes = {
  light: {
    color: "#000000",
    backgroundColor: "#eeeeee",
  },
  dark: {
    color: "#ffffff",
    backgroundColor: "#555555",
  },
};

export const ThemeContext = React.createContext(themes.light); //()안에 초기값 설정 가능

export function ThemeProvider(props) {
  const [theme, setTheme] = useState(themes.dark); //()안 초기값
  const changeTheme = () => {
    const newTheme = theme == theme.light ? theme.dark : theme.light;
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
} //{{}} 첫번쨰는 객체 키값은 같기 떄문에 생략
