import React from "react";
import { useColorModeValue, Flex, HStack, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from 'next/router';

interface TopMenuProps {
  pages?: string[]; // Made it optional to handle undefined cases
}

const TopMenu: React.FC<TopMenuProps> = ({ pages = [] }) => { // Default value for pages
  const router = useRouter();
  const bg = useColorModeValue(
    "linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8))",
    "linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8))"
  );

  return (
    <Flex bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md" position="absolute">
      <Flex alignItems="center" justifyContent="center" mx="auto">
        <HStack spacing={1} mr={1} color="brand.500" display={{ base: "none", md: "inline-flex" }}>
          {pages.length > 0 ? (
            pages.map((page) => (
              <NextLink key={page} href={`/${page}`} passHref>
                <Button
                  variant="ghost"
                  color={router.pathname === `/${page}` ? 'blue' : 'whiteAlpha.900'}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Button>
              </NextLink>
            ))
          ) : (
            <span>No pages available</span> // Handle the case when pages are not available
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default TopMenu;
