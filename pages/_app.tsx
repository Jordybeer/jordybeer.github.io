import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";

function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ChakraProviderSessionProvider session={session}>
      <Head>
        <title>My App</title>
      </Head>
      <Layout  >
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}


export default App;