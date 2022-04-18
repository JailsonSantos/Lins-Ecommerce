import React from 'react';

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
} from '../../styles/LoginStyles';

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="User Name" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}