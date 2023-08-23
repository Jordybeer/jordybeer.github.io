import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import Head from "next/head";

function App({ Component, pageProps }: any) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <SessionProvider>
      <ChakraProvider theme={theme}>
        <Head>
          <title>RB Lasprojecten</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default App;
