import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { Announcement } from '../../components/Announcement';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';

import { useTheme } from 'styled-components';

import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Strong,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,

} from '../../styles/CartStyles';

export default function Cart() {

  const theme = useTheme();

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton filled="filled">CHECKOUT NOW</TopButton>
        </ Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://static.netshoes.com.br/produtos/tenis-feminino-rainha-shoot/50/D50-1062-050/D50-1062-050_zoom1.jpg?ts=1598960717" />
                <Details>
                  <ProductName>
                    <Strong>Product:</Strong> JESSIE THUNDER HOES
                  </ProductName>
                  <ProductId>
                    <Strong>ID:</Strong> 777
                  </ProductId>
                  <ProductColor color={theme.backgroundDark} />
                  <ProductSize>
                    <Strong>Size:</Strong> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>2</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>R$ 99.00</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://static3.tcdn.com.br/img/img_prod/586374/blusa_infantil_feminina_verao_rosa_resistente_a_agua_malwee_2979_1_20200820135324.jpg" />
                <Details>
                  <ProductName>
                    <Strong>Product:</Strong> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <Strong>ID:</Strong> 777
                  </ProductId>
                  <ProductColor color={theme.pink} />
                  <ProductSize>
                    <Strong>Size:</Strong> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>R$ 29.00</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>R$ 190.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>R$ 39.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>R$ - 60.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>R$ 190.00</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}