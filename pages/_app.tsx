import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
<<<<<<< Updated upstream
import theme from "../components/theme";
=======
import React from "react";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { useEffect, useState } from 'react';
import Fooder from "../components/fooder";
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
>>>>>>> Stashed changes

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
<<<<<<< Updated upstream
      <ChakraProvider theme={theme}>
        <Layout >
          <Component {...pageProps} />
=======
      <ChakraProvider>
        <Layout>
            <Component {...pageProps} />
>>>>>>> Stashed changes
        </Layout>
      </ChakraProvider>
    </>
  );
}
<<<<<<< Updated upstream
export default App;
=======
>>>>>>> Stashed changes
