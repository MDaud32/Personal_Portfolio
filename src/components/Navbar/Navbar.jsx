/* eslint-disable react/jsx-closing-bracket-location */

import React from 'react';
import { motion } from 'framer-motion';

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
  Link,
  Flex,
} from '@chakra-ui/react';

import { HiMenu } from 'react-icons/hi';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <Box
      position="fixed"
      zIndex={30}
      w="100%"
      h="20"
      p={6}
      bg="gray.100"
      display="flex"
      flexDirection="row"
      justifyContent="space-between "
      alignItems="center">
      <Text
        fontSize={{ base: '2xl', lg: '3xl', xl: '3xl' }}
        alignItems="center"
        fontWeight="bold">
        M_Daud
      </Text>

      <Box
        w="full"
        display={{
          base: 'none',
          xl: 'flex',
          md: 'flex',
          sm: 'none',
        }}>
        <Flex
          flexDirection="row"
          flex="1"
          alignItems="center"
          justifyContent="center">
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <Box
              m={4}
              key={`link-${item}`}
              fontSize={18}
              onClose={onClose}
              color="gray.600"
              textTransform="uppercase">
              <motion.div whileHover={{ y: -4 }}>
                <Link _focus="none" textDecoration="none" href={`#${item}`}>
                  {item}
                </Link>
              </motion.div>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box
        display={{
          base: 'flex',
          xl: 'none',
          md: 'none',
          sm: 'flex',
        }}>
        <Button
          ref={btnRef}
          onClick={onOpen}
          flexDirection="flex-end"
          size="lg"
          _focus="none"
          _hover={{ bg: 'blue.300' }}>
          <HiMenu />
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="bottom"
          size="sm"
          onClose={onClose}
          finalFocusRef={btnRef}>
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton
              onClose={onClose}
              _focus="none"
              _hover={{ bg: 'blue.300' }}
            />

            <DrawerBody>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <Box
                  alignItems="center"
                  justifyContent="flex-start"
                  p={4}
                  textTransform="uppercase"
                  key={`link-${item}`}>
                  <motion.div whileHover={{ x: -6 }}>
                    <Link _focus="none" href={`#${item}`}>
                      {item}
                    </Link>
                  </motion.div>
                </Box>
              ))}
            </DrawerBody>

            <DrawerFooter>
              <Button
                variant="outline"
                mr={3}
                onClick={onClose}
                _hover={{ bg: 'blue.300' }}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
