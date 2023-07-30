import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // jis k aage use likha ho wo hooks h

  return (
    <>
      <Button
        pos={'fixed'}
        top={4}
        left={4}
        colorScheme="purple"
        p={0}
        w={10}
        h={10}
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={'overlay'}     // overlay is for that the content can be viewed
      >
        <BiMenuAltLeft size={20} />
      </Button>

      {/* placement is used to change the direction of drawer opening. */}

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Vedio Hub</DrawerHeader>
          <DrawerBody>
            {' '}
            {/* it is a wrapper tag*/}
            {/* stack is a fency term, basically it is a div with display=flex and vstack is also stack with flex-direction: column align-item: center by default*/}
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to="/">Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to="/videos">Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to="/videos?category=free">Free Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to="/upload">Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={10}
              left={0}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={'/login'}>Log In</Link>
              </Button>

              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
