import React from "react";
import { Box, Container } from "@chakra-ui/react";
import SidebarWithHeader from "../components/sidebarwithheader";
const Layout = ({ children }) => {
  return (
    //main

    <Box
      minHeight="100vh"
      display="flex"
      bgColor={"#482B94"}
      flexDirection="column"


    >
      <SidebarWithHeader />
      {/* Footer / Fooder CSS */}
    </Box>
  );
};

export default Layout;
