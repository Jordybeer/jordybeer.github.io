// This code is used to render the footer of the page. It includes a link to my website, and a little heart emoji.

import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      textAlign="center"
      position="relative"
      bottom="0"
      width="100%"
    >
      <Text>
        Made with{" "}
        <span role="img" aria-label="heart">
          💜
        </span>{" "}
        by <Link href="https://jordy.lol">Jordy Berendsen</Link>
      </Text>
    </Box>
  );
};

export default Footer;
