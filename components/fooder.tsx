import React from "react";
import { Link as ChakraLink, IconButton, Flex, chakra } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaYoutube, FaPaw } from "react-icons/fa";

const Fooder: React.FC = () => {
  return (
<Flex
  as="footer"
  w="full"
  pb={2}
  mt="5vh"
  bg="transparent"
  flexDir="column"
  align="center"
  justify="space-between"
  transition="background 0.3s ease"
>
      <chakra.a
        href="/"
        fontSize="1rem"
        fontWeight="bold"
        color="alphaWhite.800"
        _hover={{ color: "alphaBlack.700" }}
      >
        RB Lasprojecten
      </chakra.a>

      <Flex>
        <SocialButton
          href="https://www.instagram.com/rblasprojecten/"
          ariaLabel="Volg op Instagram"
          icon={<FaInstagram fontSize="1rem" />}
          colorScheme="Instagram"
        />
        <SocialButton
          href="https://www.facebook.com/rblasprojecten/"
          ariaLabel="Volg op Facebook"
          icon={<FaFacebook fontSize="1rem" />}
          colorScheme="Facebook"
        />
        <SocialButton
          href="https://www.youtube.com/@rblasprojecten/"
          ariaLabel="Volg op Youtube"
          icon={<FaYoutube fontSize="1rem" />}
          colorScheme="Youtube"
        />
        <SocialButton
          href="https://jordy.beer/"
          ariaLabel="Made by jordybeer"
          icon={<FaPaw fontSize="1rem" />}
          colorScheme="Twitter"
        />
      </Flex>
    </Flex>
  );
};

const SocialButton: React.FC<{
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
  colorScheme: string;
}> = ({ href, ariaLabel, icon, colorScheme }) => (
  <ChakraLink href={href} isExternal _hover={{ bgColor: "whiteAlpha.300" }}>
    <IconButton
      colorScheme={colorScheme}
      icon={icon}
      aria-label={ariaLabel}
      isRound
      variant="solid"
      mx="1"
    />
  </ChakraLink>
);

export default Fooder;
