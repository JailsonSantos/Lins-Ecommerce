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
      <Title>Boletim Informativo</Title>
      <Description>Receba novidades dos seus produtos favoritos.</Description>
      <InputContainer>
        <Input placeholder="Digite seu email..." />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}