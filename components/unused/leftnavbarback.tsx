import { useState } from 'react'
import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Link,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import React from 'react'

export default function LeftNavbarBackb() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <Flex>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <Flex
        borderRight="1px solid #ccc"
        bg="transparent"
        position="fixed"
        top="0"
        right="0"
        left="0"
        zIndex="999"
        align="center"
      >
   <Flex
          display={['flex', 'flex', 'flex', 'flex']}
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              _hover={{ bg: "#FFD700" }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              mx={2}
              _hover={{ bg: "#FFD700" }}
            >
              About
            </Button>
          </NextLink>
        </Flex>

        <Flex
          display={['flex', 'flex', 'flex', 'flex']}
        >
          <IconButton
            aria-label="Open menu"
            variant="ghost"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={toggleMenu}
            _hover={{ bg: "#FFD700" }}
            my={5}
            ml={2}
            fontSize="6xl"
            display="flex"
          />
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={toggleMenu}>
        <DrawerOverlay />
        <DrawerContent > {/* Set the background color to 7F71E3 */}
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Link as={NextLink} href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Home"
                my={2}
                w="100%"
                _hover={{ bg: "#FFD700" }}
              >
                Home
              </Button>
            </Link>
            <Link as={NextLink} href="/about" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="About"
                my={2}
                w="100%"
                _hover={{ bg: "#FFD700" }}
              >
                About
              </Button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
