import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Tag,
  Tooltip,
  VisuallyHidden,
  Flex,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaYoutube, FaPaw } from "react-icons/fa";
import { ReactNode } from "react";

console.log("Fooder loaded");

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
    <Flex
      position="fixed"
      bottom="0"
      width="100%"
      justifyContent="center"
      alignItems="center"
      bg="transparent"
      borderBottomColor="#232e4a"
      visibility="visible"

    >
      <Container
        as={Stack}
        maxW={"100%"}
        direction={{ base: "column", md: "row" }}
        spacing={10}
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
          <SocialButton label={"Design by Jordybeer"} href={"http://www.jordy.beer"}>
            <FaPaw />
          </SocialButton>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Fooder;
