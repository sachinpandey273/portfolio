import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./global";
import { StyleContext } from "./contexts/StyleContext";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
  );

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      localStorage.setItem("theme", "dark");
    } else {
      setTheme(lightTheme);
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <StyleContext.Provider
      value={{ isDark: theme === darkTheme, toggleTheme: toggleTheme }}
    >
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div>
            <Main theme={theme} />
          </div>
        </>
      </ThemeProvider>
    </StyleContext.Provider>
  );
}

export default App;
