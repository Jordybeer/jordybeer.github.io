import React from "react";
import { Box, Container } from "@chakra-ui/react";
import SidebarWithHeader from '../components/sidebarwithheader'
const Layout = ({ children }) => {
  return (

    <Box minHeight="100vh" display="flex" flexDirection="column">
      <SidebarWithHeader />
      <Container as="main" flex="1" pb={8}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;