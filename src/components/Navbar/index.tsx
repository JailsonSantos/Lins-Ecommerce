import React from 'react';
import Badge from '@material-ui/core/Badge/Badge';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';

import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem
} from './styles';

export function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>US</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 18 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Lins.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}