import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const theme = responsiveFontSizes(createTheme({typography: {h2: {fontFamily: ["'Permanent Marker'", "cursive"].join(",")}}}));
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Luke Harding's Web Development Portfolio"/>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
