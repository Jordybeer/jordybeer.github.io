import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import SidebarWithHeader from "../components/sidebarwithheader";
const Layout = ({ children }) => {
  return (
    //main
    
    <Box
      minHeight="100vh"
      display="flex"
      bgColor={useColorModeValue("#242424", "#242424  ")}
      flexDirection="column"
      color={useColorModeValue("white", "white")}
      borderRight= " solid ##03435f"
      scrollBehavior="smooth"
      borderRadius="xs"



    >
      <SidebarWithHeader />
      {/* Footer / Fooder CSS */}
    </Box>
  );
};

export default Layout;
