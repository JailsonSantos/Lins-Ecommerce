import React from 'react';
import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, WhatsApp } from '@material-ui/icons';

import {
  Container,
  Left,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  DescriptionItem,
  Payment,
} from './styles';

export function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Lins.</Logo>
        <Description>
          É uma loja que disponibiliza os melhores produtos do mercado,
          além de contar com excelentes preços e promoções, você consegue fazer suas compras,
          na comodidade da sua casa, com apenas alguns cliques, conheça nossos produtos e venha
          fazer parte desse Revolucionário Mundo da Moda.
        </Description>
        <SocialContainer>
          <SocialIcon color="#0572e6">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#0a66c2">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="#24cb43">
            <WhatsApp />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Úteis</Title>
        <List>
          <ListItem>
            <a>Início</a>
          </ListItem>
          <ListItem>
            <a>Carrinho de compras</a>
          </ListItem>
          <ListItem>
            <a>Coleção Masculina</a>
          </ListItem>
          <ListItem>
            <a>Coleção Feminina</a>
          </ListItem>
          <ListItem>
            <a>Coleção Infantil</a>
          </ListItem>
          <ListItem>
            <a>Acessórios</a>
          </ListItem>
          <ListItem>
            <a>Minha conta</a>
          </ListItem>
          <ListItem>
            <a>Acompanhar pedidos</a>
          </ListItem>
          <ListItem>
            <a>Lista de desejos</a>
          </ListItem>
          <ListItem>
            <a>Termos de compras</a>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contatos</Title>
        <ContactItem>
          <Room />
          <DescriptionItem>
            Av. Daniel de Latouch, 777, Cohama, São Luis
          </DescriptionItem>
        </ContactItem>
        <ContactItem>
          <Phone />
          <DescriptionItem>
            (98) 98856-5096
          </DescriptionItem>
        </ContactItem>
        <ContactItem>
          <MailOutline />
          <DescriptionItem>
            jailson.ads007@gmail.com
          </DescriptionItem>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}