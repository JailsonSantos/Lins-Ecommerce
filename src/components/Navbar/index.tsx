import React, { Fragment } from 'react';
import Badge from '@material-ui/core/Badge';
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
  MenuItem,
  ImageAvatar
} from './styles';

import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useTheme } from 'styled-components';

import logo from '../../assets/logo.svg';


import { logout } from '../../redux/apiCalls';

export function Navbar() {

  const theme = useTheme();

  const quantity = useSelector((state: RootState) => state.cart.quantity);
  const { currentUser } = useSelector((state: RootState) => state.user)

  const dispatch = useDispatch();

  /* console.log(typeof logo);
  JSON.stringify
 */

  // const cart = useSelector((state: RootState) => state.cart);
  //console.log("REDUX CART: ", cart);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>BR</Language>
          <SearchContainer>
            <Input placeholder="Buscar..." />
            <Search style={{ color: theme.primary, fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link href="/">
            <a>
              <Logo src="logo.svg" alt="Logo da aplicação Lins E-commerce" />
            </a>
          </Link>

          <Right>
            <Link href="/">
              <a>
                <MenuItem>INÍCIO</MenuItem>
              </a>
            </Link>

            {currentUser._id !== '' ?
              <MenuItem onClick={() => logout(dispatch)}>SAIR</MenuItem>
              :
              <>
                <Link href="/register">
                  <a>
                    <MenuItem>REGISTRAR</MenuItem>
                  </a>
                </Link>
                <Link href="/login">
                  <a>
                    <MenuItem>LOGIN</MenuItem>
                  </a>
                </Link>
              </>
            }
            <Link href="/cart">
              <a>
                <MenuItem>
                  <Badge overlap="rectangular" badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              </a>
            </Link>
            {currentUser._id !== '' &&
              <ImageAvatar src={currentUser.img} alt={`Imagem de Perfil, ${currentUser.username}`} />
            }
          </Right>
        </Center>
      </Wrapper>
    </Container>
  );
}