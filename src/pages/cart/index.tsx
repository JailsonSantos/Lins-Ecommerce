import { Add, Remove } from '@material-ui/icons';
import React, { Fragment, useEffect, useState } from 'react';
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
  ProductColorArea,
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

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../../services/api';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { clearCart } from '../../redux/apiCalls';

interface StripeTokenProps {
  id: string;
}

export default function Cart() {

  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart)
  const { currentUser } = useSelector((state: RootState) => state.user)
  const total = cart.total;

  const dispatch = useDispatch();

  const [stripeToken, setStripeToken] = useState<any>({});

  const KEY = process.env.NEXT_PUBLIC_STRIPE_KEY_PUBLIC;

  const onToken = (token: any) => {
    setStripeToken(token);
  }

  /* 
  const { quantity } = cart;
  const [quantityTotal, setQuantityTotal] = useState(quantity);
  
  const handleQuantity = (type: string) => {
      if (type === 'desc') {
        quantityTotal > 1 && setQuantityTotal(quantityTotal - 1)
  
        console.log(quantityTotal)
      } else {
        setQuantityTotal(quantityTotal + 1)
        console.log(quantityTotal)
      }
    } */


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
        <Title>SUAS COMPRAS</Title>
        <Top>
          <Link href="/">
            <a>
              <TopButton>
                CONTINUAR COMPRANDO
              </TopButton>
            </a>
          </Link>

          <TopTexts>
            <TopText>Sacola de compras(2)</TopText>
            <TopText>Lista de desejos(0)</TopText>
          </TopTexts>

          <TopButton
            filled="filled"
            onClick={() => clearCart(dispatch)}
          >
            LIMPAR O CARRINHO DE COMPRAS
          </TopButton>

        </ Top>
        <Bottom>
          <Info>
            {cart.quantity > 0 &&
              cart?.products?.map((product, index) => (
                <Fragment key={index}>
                  <Product>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductId>
                          <Strong>Cód. do produto:</Strong> {product._id}
                        </ProductId>
                        <ProductName>
                          <Strong>Descrição: </Strong> {product.title}
                        </ProductName>
                        <ProductSize>
                          <Strong>Tamanho: </Strong> {product.size}
                        </ProductSize>
                        <ProductColorArea>
                          <Strong>Cor:</Strong>
                          <ProductColor color={product.color} />
                        </ProductColorArea>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Remove />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Add />
                      </ProductAmountContainer>
                      <ProductPrice>R$ {(product.price * product.quantity).toFixed(2)}</ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </Fragment>
              ))}

          </Info>
          <Summary>
            <SummaryTitle>RESUMO DO PEDIDO</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>R$ {cart.total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Valor do Envio</SummaryItemText>
              <SummaryItemPrice>R$ 19.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Desconto do Envio</SummaryItemText>
              <SummaryItemPrice>R$ - 19.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>R$ {cart.total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>

            {currentUser._id !== '' ?

              <StripeCheckout
                name="Lins E-commerce."
                description={`Your total is $ ${cart.total}`}
                image="https://avatars.githubusercontent.com/u/11697713?v=4"
                billingAddress
                shippingAddress
                amount={total * 100}
                token={onToken}
                stripeKey={KEY ? KEY : ''}
              >
                <Button>CONFIRMAR COMPRA</Button>
              </StripeCheckout>

              :

              <Link href="/login">
                <a>
                  <Button>
                    CONFIRMAR COMPRA
                  </Button>
                </a>
              </Link>
            }

          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}