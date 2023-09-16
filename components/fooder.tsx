import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
<<<<<<< HEAD
  Tag,
  Tooltip,
  VisuallyHidden,
  Flex,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaYoutube, FaPaw } from "react-icons/fa";
import { ReactNode } from "react";
console.log("Fooder loaded")
=======
  VisuallyHidden,
  Flex,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

>>>>>>> bbe3434f0494198e70ff02d026b3a69a489bd0d7
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="whiteAlpha.100"
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "whiteAlpha.300",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Fooder = () => {
  return (
    <Flex>
      <Box bg="transparent" borderBottomColor="#232e4a">
        <Container
          position="fixed"
          bottom="0"
          width={"full"}
          as={Stack}
          maxW={"6xl"}
          py={2}
          pt={10}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify="center" // Set justify to 'center'
          align="center" // Set align to 'center'
        >
          <Stack direction="row" spacing={"4"}>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Youtube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Flex>
  );
};

export default Fooder;
