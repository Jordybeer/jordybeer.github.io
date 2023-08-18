import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import React, {useState} from 'react';

export default function LeftNav() {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen}>
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={open}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Button
              as="a"
              href="/"
              variant="ghost"
              aria-label="Menu"
              _hover={{bg: '#BFAE73'}}
            >
              Menu
            </Button>
            <Image src="https://i.imgur.com/jTxqkb2.png" alt="logo" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
