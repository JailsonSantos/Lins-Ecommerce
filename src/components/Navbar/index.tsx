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

import Link from 'next/link';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export function Navbar() {

  const quantity = useSelector((state: RootState) => state.cart.quantity);

  // const cart = useSelector((state: RootState) => state.cart);
  //console.log("REDUX CART: ", cart);

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
          <Link href="/">
            <a>
              <Logo>Lins.</Logo>
            </a>
          </Link>
        </Center>
        <Right>
          <Link href="/register">
            <a>
              <MenuItem>REGISTER</MenuItem>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <MenuItem>SIGN IN</MenuItem>
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </a>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}