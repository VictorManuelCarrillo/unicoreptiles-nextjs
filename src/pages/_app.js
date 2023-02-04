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

const unicoReptilesPrimaryTheme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },

    secondary: {
      main: red['A700']
    },

    button: {
      primary: {
        light: amber[300],
        main: lightBlue[500],
        dark: amber[700],
      },

      secondary: {
        light: lightBlue[300],
        main: lightBlue[500],
        dark: lightBlue[700],
      },

      text: {
        light: grey["A100"],
        main: grey["A200"],
        dark: grey["A400"],
      },
    },

    speedDial: {
      main: "red",
      whatsApp:
        "linear-gradient(160deg, rgba(52,183,241,1) 0%, rgba(37,211,102,1) 60%)",
      facebook: "blue",
      phone: "grey",
      maps: "purple",
    },

    card: {
      text: "white",
      header: lightBlue[700],
      content: grey[800],
    },

    text: {
      primary: grey[900],
      secondary: grey[700],
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={unicoReptilesPrimaryTheme}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default MyApp;
