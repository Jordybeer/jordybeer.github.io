import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import Head from "next/head";

import "../styles/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  styles: {
    global: {
      "*": {
        textShadow: "1px 1px 2px rgba(0,0,0,1.5)",
      },
    },
  },
});

console.log("app loaded");

function App({ Component, pageProps }: any) {
  const [isMounted, setIsMounted] = useState(false);
  const yourPagesDataHere = [];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
      <ChakraProvider theme={theme}>
        <Head>
          <title>RB Lasprojecten</title>
        </Head>
        <Layout pages={yourPagesDataHere}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
  );
}

export default App;
