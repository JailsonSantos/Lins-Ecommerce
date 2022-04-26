import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Announcement } from '../../components/Announcement';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';

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

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../../services/api';
import { useRouter } from 'next/router';

// const KEY = process.env.STRIPE_KEY_PUBLIC;

interface StripeTokenProps {
  id: string;
}

export default function Cart() {

  const cart = useSelector((state: RootState) => state.cart)
  const total = cart.total;

  const router = useRouter();

  const [stripeToken, setStripeToken] = useState<any>({});

  const KEY = "pk_test_51KsYb0K8tmpXblZ8ZTZGudWKJQk4qeJNHZDC7MRJoNvcae5ZxjtdEGI5m38y0yDoCkqkuQNBVkKqV2ONN2tbhCg9001DVkaxkv"

  const onToken = (token: any) => {
    setStripeToken(token);
  }


  useEffect(() => {
    const makeRequest = async () => {
      try {

        console.log('TOKEN STRIPE: ', stripeToken);

        const response = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: total * 100,
        });

        console.log('RESPONSE: ', response.data)
        router.push("/", response.data);

      } catch (error) {
        console.log(error);
      }
    }
    stripeToken.id !== undefined && total >= 1 && makeRequest();
  }, [stripeToken, total, router]);

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
            {
              cart?.products?.map((product, index) => (
                <Product key={index} >
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <Strong>Product:</Strong> {product.title}
                      </ProductName>
                      <ProductId>
                        <Strong>ID:</Strong> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <Strong>Size:</Strong> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add />
                    </ProductAmountContainer>
                    <ProductPrice>R$ {product.price * product.quantity}</ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
            <Hr />

          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>R$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>R$ 19.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>R$ - 19.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>R$ {cart.total}</SummaryItemPrice>
            </SummaryItem>


            <StripeCheckout
              name="Lins E-commerce."
              description={`Your total is $ ${cart.total}`}
              image="https://avatars.githubusercontent.com/u/11697713?v=4"
              billingAddress
              shippingAddress
              amount={total * 100}
              token={onToken}
              stripeKey={KEY}
            >

              <Button>CHECKOUT NOW</Button>

            </StripeCheckout>

          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}