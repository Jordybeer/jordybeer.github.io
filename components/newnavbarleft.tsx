import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import React from 'react';

export const NewNavbarLeft = () => {
  
  const [display, changeDisplay] = useState('none')
  return (
    <Flex>
      <Flex
        position="fixed"
        top="1rem"
        right="1rem"
        align="center"
      >
        {/* Desktop */}
        <Flex
          display={['flex', 'flex', 'flex','flex']}
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
            >
              Home
            </Button>
          </NextLink>
        </Flex>

        {/* Mobile */}
        <Flex
          display={['none', 'none', 'flex', 'flex']}
        >
          <IconButton
            aria-label="Open menu"
            icon={display === 'none' ? <HamburgerIcon /> : <CloseIcon />}
            onClick={() => changeDisplay(display === 'none' ? 'block' : 'none')}
            mr={2}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}