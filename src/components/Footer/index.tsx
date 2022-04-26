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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Pariatur quos labore animi nesciunt porro ratione expedita, ea voluptas.
          Eligendi possimus culpa temporibus laborum accusantium.
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
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
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