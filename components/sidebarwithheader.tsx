'use client'

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  useColorMode,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  Card
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiChevronDown,
} from 'react-icons/fi'
import { IconType } from 'react-icons';

import Home from '../pages/home';
import { FaRegLightbulb } from 'react-icons/fa';

// Supports weights 100-900
import '@fontsource-variable/raleway';
import Fooder from '../components/fooder';

interface LinkItemProps {
  name: string
  icon: IconType
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Design op maat', icon: FiHome },
  { name: 'Portfolio', icon: FiTrendingUp },
  { name: 'Te koop', icon: FiCompass },
  { name: 'Contacteer', icon: FiStar },
  { name: 'Over ons', icon: FiSettings },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    // left navbar
    <Flex
       transition="3s ease"
       bg={useColorModeValue('white', '#262956')}
      borderRight="1x"
      borderRightColor="##BDBDBD"

      w={{ base: 'null', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="70" justifyContent="space-start">

        <Text 
        textAlign={{ base: 'start', md: 'left' }}
        fontSize="2xl" 
        fontFamily="Raleway Variable" sans-serif 
        fontWeight="700"
        letterSpacing={'0.10em'}>
          Raw. industrial
        </Text>

        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Fooder />

    </Flex>
  )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#536DFE',
          color: 'white',
          fontWeight: 'bold',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
    // top navbar
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
       bg={useColorModeValue('white', '#3B217A ')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('white', '#BDBDBD')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

 <Text 
         display={{ base: 'flex', md: 'none' }}
         bgGradient='linear(to-l, #7928CA, #FF0080)'
         bgClip='text'
        fontSize="3xl" 
        fontFamily="Raleway Variable" sans-serif 
        fontWeight="700">
          Raw. industrial
        </Text>
      <HStack spacing={{ base: '0', md: '2' }} >

        <IconButton  onClick={toggleColorMode} size="lg" mr={4} variant="outline" aria-label="open menu" icon={<FaRegLightbulb size="24"/>} />

        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'md'}
                  src={
                    'https://cn.i.cdn.ti-platform.com/cnapac/content/701/showpage/we-bare-bears/sa/showicon.png'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Jordybeer</Text>
                  <Text fontSize="xs" color="gray.200">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', '#red.900')}
              borderColor={useColorModeValue('#16181A', '#121314')}>
              <MenuItem>Profiel</MenuItem>
              <MenuItem>Album beheren</MenuItem>
              <MenuItem>Instellingen</MenuItem>
              <MenuItem>Afmelden</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box >
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      
      <Box ml={{ base: 0, md: 60 }} p="4">

<Home />
      </Box>
    </Box>
  )
}

export default SidebarWithHeader
