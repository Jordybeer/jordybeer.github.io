import React from "react";
import { Box, Container } from "@chakra-ui/react";
import SidebarWithHeader from '../components/sidebarwithheader'
const Layout = ({ children }) => {
  return (

    <Box minHeight="100vh" display="flex" flexDirection="column">
      <SidebarWithHeader />
      {/* Footer / Fooder CSS */}
      <Container as="main" flex="1" pb={12}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;