import React from 'react';
import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
  Flex,
} from '@chakra-ui/react';
import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={50} p={16} color={'white'} textAlign={['center','left']} >
      <Stack direction={['column', 'row']} >
        <VStack alignItems={'stretch'} w={'full'} px={4}>
          <Heading size={'md'} textTransform={'uppercase'}>
            subscibe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} p={2}    >
            <Input
              placeholder="Enter email here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={0}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'} my={4}>
            Vedio Hub
          </Heading>
          <Text>ALL right received</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'} py={2}>
            {' '}
            Social Media
          </Heading>

          <Button variant={'link'}>
            <a href="https://www.youtube.com/watch?v=b50zSyLiCYQ&t=9646s">
              <AiFillYoutube size={'40'} />
            </a>
            Youtube
          </Button>

          <Button variant={'link'}>
            <a href="instagram.com">
              <AiFillInstagram size={'40'} />
            </a>
            Instagram
          </Button>

          <Button variant={'link'}>
            <a href="github.com">
              <AiFillGithub size={'40'} />
            </a>
            Github
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
