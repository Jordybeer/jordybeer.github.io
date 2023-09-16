import React, { useEffect, useState } from "react";
import { useColorModeValue, Flex, HStack, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import LeftNav from "./newnavbarleft";
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

console.log("Topmenu component rendered");

export default function TopMenu() {
  const [pages, setPages] = useState<string[]>([]);
  const router = useRouter();
  const bg = useColorModeValue("linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8))", "linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8))");

  useEffect(() => {
    // Fetch the list of pages from the 'pages' directory
    const pagesDir = path.join(process.cwd(), 'pages');
    fs.readdir(pagesDir, (err, files) => {
      if (err) {
        console.error('Could not list the directory.', err);
        return;
      }

      const pageNames = files.map(file => file.replace(/\.tsx?$/, ''));
      setPages(pageNames);
    });
  }, []);

  return (
    <Flex bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md" position="absolute">
      <Flex alignItems="center" justifyContent="center" mx="auto">
        <HStack spacing={1} mr={1} color="brand.500" display={{ base: "none", md: "inline-flex" }}>
          <NextLink href="/">
            <Button variant="ghost" color='whiteAlpha.900'>Home</Button>
          </NextLink>
          <NextLink href="/api/auth/signin">
            <Button variant="ghost" color='whiteAlpha.900'>Inloggen</Button>
          </NextLink>
          <NextLink href="/contact">
            <Button variant="ghost" color='whiteAlpha.900'>Contact</Button>
          </NextLink>
          <NextLink href="/slides">
            <Button variant="ghost" color='whiteAlpha.900'>Slides</Button>
          </NextLink>
          <NextLink href="/projects">
            <Button variant="ghost" color='whiteAlpha.900'>Projecten</Button>
          </NextLink>
          {/* Dynamically added pages */}
          {pages.map((page) => (
            <NextLink key={page} href={`/${page}`} passHref>
              <Button
                variant="ghost"
                color={router.pathname === `/${page}` ? 'blue' : 'whiteAlpha.900'}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Button>
            </NextLink>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}
