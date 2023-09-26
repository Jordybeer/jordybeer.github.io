import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import '../styles/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

console.log('app loaded')

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
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>RB Lasprojecten</title>
        </Head>
        <Layout pages={yourPagesDataHere}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default App;
