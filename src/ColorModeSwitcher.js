import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  DarkMode,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      pos={'fixed'}
      top={'4'} // 1unit = 16px..
      right={'4'}
      zIndex={'overlay'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      background={'white'}
      {...props}
      
    />
    
  );
};

export default ColorModeSwitcher;
