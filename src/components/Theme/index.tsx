import { ReactNode } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    red: "#C73B0F",
    rose50: "#FCF8F6",
    rose100: "#AFDBD2",
    rose300: "#CAAFA7",
    rose400: "#AD8A85",
    rose500: "#87635A",
    rose900: "#260F08",
    green: "#1EA575",
    black: "#000000",
    white: "#FFFFFF",
  },
  fonts: ["red-hat-text", "sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};
const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;
