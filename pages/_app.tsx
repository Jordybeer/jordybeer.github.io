import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Layout, { LayoutProps } from "../components/layout";
import theme from "../components/theme";

interface MyAppProps {
  Component: React.ElementType;
  pageProps: any;
}

interface LayoutPropsWithChildren extends LayoutProps {
  children: React.ReactNode;
}

function App({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;