import React from 'react';
import { Send } from '@material-ui/icons';

import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from './styles';

export function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely uploads from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}