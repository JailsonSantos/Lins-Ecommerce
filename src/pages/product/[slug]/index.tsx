import React, { useEffect, useState } from 'react';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { Newsletter } from '../../../components/Newsletter';
import { Announcement } from '../../../components/Announcement';

import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from '../../../styles/ProductStyles';

import { useRouter } from 'next/router';
import { Add, Remove } from '@material-ui/icons';
import { publicRequest } from '../../../services/api';

import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/cartRedux';

interface ProductProps {
  _id: string;
  title: string;
  description: string;
  img: string;
  categories: string[];
  size: string[];
  color: string[];
  price: number;
  inStock: true;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  quantity?: number;
  total?: number;
}

export default function Product() {

  const router = useRouter();
  const id = router.query.slug;
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("P");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await publicRequest.get(`/products/find/${id}`);
        setProduct(response.data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    getProduct();
  }, [id]);

  const handleQuantity = (type: string) => {
    if (type === 'desc') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  // UPDATED CART
  const handleClickCart = () => {
    const priceFormatted = Number(product.price);
    const total = quantity * priceFormatted;

    dispatch(
      addProduct(
        {
          ...product,
          quantity,
          total,
          color,
          size,
        }
      )
    );
  };

  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>R$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Cor</FilterTitle>
              {
                product.color?.map((color) => (
                  <FilterColor key={color} color={color} onClick={() => setColor(color)} />
                ))
              }
            </Filter>
            <Filter>
              <FilterTitle>Tamanho</FilterTitle>
              <FilterSize onChange={(event) => setSize(event.target.value)}>
                {
                  product.size?.map((size) => (
                    <FilterSizeOption key={size}>{size}</FilterSizeOption>
                  ))
                }

              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('desc')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handleClickCart}>ADICONAR AO CARRINHO</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
}