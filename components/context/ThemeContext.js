import {createContext} from "react";
import {DefaultTheme, DarkTheme} from "@react-navigation/native";

const darkMode = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: 'black',
        text: 'white',
        border: 'white',
    },
};
// context voor het thema van de app

export const ThemeContext = createContext({dark: darkMode, light: DefaultTheme});