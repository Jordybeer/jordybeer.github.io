import React from "react";
import { Box } from "@chakra-ui/react";
import SidebarWithHeader from "../components/sidebarwithheader";
const Layout = ({ children }) => {
  return (
    //main
    
    <Box
      minHeight="100vh"
      display="flex"
      // bgColor='#242424'
      flexDirection="column"
      bgGradient=
      'linear(to-br, #320850 , #2E51BB)'
      color='white'
      borderRight= " solid #03435f"
      scrollBehavior="smooth"
      borderRadius="xs"



    >
      <SidebarWithHeader />
      {/* Footer / Fooder CSS */}
    </Box>
  );
};

export default Layout;
