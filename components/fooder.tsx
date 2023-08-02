'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  VisuallyHidden,
  Flex
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const Fooder=()=> {
  return (
    <Flex>
    <Box 
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('white', 'gray.900')}>
     <Container
  position='absolute' // Set to absolute
  bottom = '0'
  width={'full'}
  as={Stack}
  maxW={'6xl'}
  py={2}
  direction={{ base: 'column', md: 'row' }}
  spacing={4}
  justify='center' // Set justify to 'center'
  align='center' // Set align to 'center'
>
  <Stack direction='row' spacing={3}>
    <SocialButton label={'Twitter'} href={'#'}>
      <FaTwitter />
    </SocialButton>
    <SocialButton label={'YouTube'} href={'#'}>
      <FaYoutube />
    </SocialButton>
    <SocialButton label={'Instagram'} href={'#'}>
      <FaInstagram />
    </SocialButton>
    
  </Stack>
  <Stack>
    <Box >Made with 💜 by <Text as='a' href='https://jordy.lol'>Jordy B.</Text></Box>
</Stack>
</Container>
    </Box>
    </Flex>
  )
}

export default Fooder;