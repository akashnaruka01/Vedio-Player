import React from 'react';
import {
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'} >
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>

          <Input placeholder="Email Id" type="email" required />

          <Input placeholder="Password" type="password" required />

          <Button required colorScheme="purple" type="submit">
            Sign In
          </Button>

          <Stack direction={['column', 'row']} justifyContent={'space-between'}>
            <Button variant={'link'}>
              <Link to={'/signup'}>New User?</Link>
            </Button>
            <Button variant={'link'}>
              <Link to={'/forgetpassword'}>Forget Password?</Link>
            </Button>
          </Stack>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
