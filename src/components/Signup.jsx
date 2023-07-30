import React from 'react';
import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Welcome </Heading>
          <Avatar boxSize={'20'} alignSelf={'center'} />
          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor="purple.500"
          />
          .500
          <Input
            placeholder="Mobile Number"
            type="number"
            required
            maxLength={'10'}
            minLength={'10'}
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Email Id"
            type="email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="purple.500"
          />
          <Button required colorScheme="purple" type="submit">
            Sign Up
          </Button>
          <Button variant={'link'} justifyContent={'start'}>
            <Link to={'/login'}>LogIn?</Link>
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
