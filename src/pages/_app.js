import "../styles/globals.css";

// MUI Theme components ____________________ //
import { createTheme, ThemeProvider } from "@mui/material/styles";
// MUI Color  ____________________ //
import {
  grey,
  red,
  blue,
  green,
  cyan,
  amber,
  lightBlue,
  purple,
} from "@mui/material/colors";

import { ParallaxProvider } from "react-scroll-parallax";

const unicoReptilesTheme = createTheme({
  palette: {
    primary: {
      light: '#1c1c1c',
      main: '#141414',
      dark: '#0a0a0a',
    },
    secondary: {
      light: '#f21000',
      main: '#de0f00',
      dark: '#c90d00',
    },
    error: {
      light: '#ff001e',
      main: '#ff0f23',
      dark: '#b80015',
    },
    warning: {
      light: '#f28100',
      main: '#e86500',
      dark: '#e84600',
    },
    info: {
      light: '#8cddff',
      main: '#54b5ff',
      dark: '#2889d4',
    },
    success: {
      light: '#74f518',
      main: '#46d916',
      dark: '#16ad2a',
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={unicoReptilesTheme}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default MyApp;
