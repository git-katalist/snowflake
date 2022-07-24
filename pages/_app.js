import { ThemeProvider } from "styled-components";

import { Theme } from "../styles/Theme";
import { Global } from "styles/Global";
import Meta from "@Components/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
