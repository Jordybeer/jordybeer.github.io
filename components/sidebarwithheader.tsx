"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Text,
  Icon,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";

import Home from "../pages/home";


// Supports weights 100-900
import "@fontsource-variable/raleway";
import Fooder from "../components/fooder";



interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Portfolio", icon: FiTrendingUp },
  { name: "Over mij", icon: FiSettings },
  { name: "Te koop", icon: FiCompass },
  { name: "Home", icon: FiHome },
  { name: "Contact", icon: FiStar },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    // left navbar
    <Flex
    h="full" 
    flexDirection={{ base: "column", md: "column" }}
      transition="3s ease"
      bg="#022636"

      borderRight="1x"
      borderRightColor="#03435f"
      w={{ base: "null", md: 60 }}
      pos="fixed"
      color='white'
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="70" justifyContent="space-start">
        <Text
          textAlign={{ base: "start", md: "left" }}
          fontSize="2xl"
          fontFamily="Raleway Variable"
          fontWeight="700"
          letterSpacing={"0.10em"}
        >
          Raw. Brand
        </Text>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Fooder />
    </Flex>
  );
};


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
// const Icon = (props) => {
//   return (
//     <motion.div
//       variants={variants}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//       >
//       <FiMenu />
//     </motion.div>
//       )
//     }
//     export const NavAnimation = () => {
//       const x = useMotionValue(0)
//       const background = useTransform(
//         x,
//         [-100, 0, 100],
//         ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
// //       )

//   return (
//     <motion.div style={{ background }}>
//       <motion.div
//         drag="x"
//         dragConstraints={{ left: 0, right: 0 }}
//         style={{ x }}
//       >
//         <Icon x={x} />
//       </motion.div>
//     </motion.div>
//   )
// }
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#1b3c4a",
          color: "white.200",
          fontWeight: "bold",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white.200",
              fontWeight: "bold"
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      // top navbar
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg="#022636"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        bgColor='transparent'
        borderColor='white.400'
        color="white.200"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        // bgGradient="linear(to-l, #7928CA, #FF0080)"
        // bgClip="text"
        fontSize="2xl"
        color="white.200"
        // letterSpacing={"0.050em"}
        fontFamily="Raleway Variable"
        fontWeight="700"
        // backgroundClip="text"
              >
        R. Brand
      </Text>
      <HStack spacing={{ base: "0", md: "2" }}>


        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"md"}
                  src={
                    "https://cn.i.cdn.ti-platform.com/cnapac/content/701/showpage/we-bare-bears/sa/showicon.png"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Jordybeer</Text>
                  <Text fontSize="xs" color="gray.200">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
            
        bg="#262956"
        borderColor="16181A" 
        p={0}
        m={0}
            >
              <MenuItem>Profiel</MenuItem>
              <MenuItem>Album beheren</MenuItem>
              <MenuItem>Instellingen</MenuItem>
              <MenuItem>Afmelden</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />

      <Box ml={{ base: 0, md: 60 }} p="3">
        <Home />
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
