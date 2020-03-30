import React, { useState, createContext } from "react";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
} from "react-native-paper";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme
} from "@react-navigation/native";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...DarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      ...DarkTheme.colors
    }
  };
  
  const CombinedDefaultTheme = {
    ...DefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...PaperDefaultTheme.colors,
      ...DefaultTheme.colors
    }
  };
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [user, setUser] = useState({});
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = () => {
    setIsDarkTheme(isDarkTheme => !isDarkTheme);
  };
  return (
    <Context.Provider value={{ isDarkTheme, toggleTheme, theme, user, setUser }}>{children}</Context.Provider>
  );
};