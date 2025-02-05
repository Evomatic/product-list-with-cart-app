import { ReactNode } from "react";
import {
  DefaultTheme,
  css,
  Interpolation,
  ThemeProvider,
} from "styled-components";

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
  fonts: ["sans-serif", "Red Hat Text"],
  fontSizes: {
    sma: "1em",
    md: "2em",
    lg: "3em",
  },
  fontWeight: {
    w400: 400,
    w600: 600,
    w700: 700,
  },
  typography: {
    preset1: {
      fontFamily: "'Red Hat Text', sans-serif",
      fontWeight: "bold",
      fontSize: "40px",
      lineHeight: "120%",
      letterSpacing: "0px",
    },
    preset2: {
      fontFamily: "'Red Hat Text', sans-serif",
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "125%",
      letterSpacing: "0px",
    },
    preset3: {
      fontFamily: "'Red Hat Text', sans-serif",
      fontWeight: "600", // Semi Bold
      fontSize: "16px",
      lineHeight: "150%",
      letterSpacing: "0px",
    },
    preset4: {
      fontFamily: "'Red Hat Text', sans-serif",
      fontWeight: "400", // Regular
      fontSize: "14px",
      lineHeight: "150%",
      letterSpacing: "0px",
    },
    preset4Bold: {
      fontFamily: "'Red Hat Text', sans-serif",
      fontWeight: "600", // Semi Bold
      fontSize: "14px",
      lineHeight: "150%",
      letterSpacing: "0px",
    },
  },
  spacing: {
    1100: "88px",
    500: "40px",
    400: "32px",
    300: "24px",
    200: "16px",
    150: "12px",
    100: "8px",
    50: "4px",
  },
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "1024px",
    lg: "1280px",
    xl: "1440px",
  },
};

type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";

type MediaQuery = (
  first: TemplateStringsArray,
  ...rest: Interpolation<DefaultTheme>[]
) => ReturnType<typeof css>;

export const media: Record<Breakpoints, MediaQuery> = {
  xs: (first, ...args) =>
    css`
      @media (max-width: 480px) {
        ${css(first, ...args)}
      }
    `,
  sm: (first, ...args) =>
    css`
      @media (max-width: 768px) {
        ${css(first, ...args)}
      }
    `,
  md: (first, ...args) =>
    css`
      @media (max-width: 1024px) {
        ${css(first, ...args)}
      }
    `,
  lg: (first, ...args) =>
    css`
      @media (max-width: 1280px) {
        ${css(first, ...args)}
      }
    `,
  xl: (first, ...args) =>
    css`
      @media (max-width: 1440px) {
        ${css(first, ...args)}
      }
    `,
};

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;
