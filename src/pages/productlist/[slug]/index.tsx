import React from 'react';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { Newsletter } from '../../../components/Newsletter';
import { Announcement } from '../../../components/Announcement';
import { useTheme } from 'styled-components';
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
import { Add, Remove } from '@material-ui/icons';

export default function Product() {

  const theme = useTheme();
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImgContainer>
          <Image src="https://siberian.vteximg.com.br/arquivos/ids/178548-400-400/SFV21CL038VD01_1.jpg?v=637782828292800000" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denin Jumpsuit</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quia tenetur laudantium fugit nulla illo nemo hic,
            perspiciatis cum explicabo laboriosam esse alias adipisicing,
            accusamus totam ullam animi provident doloribus repudiandae pariatur.
          </Description>
          <Price>R$ 20,00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color={theme.dark} />
              <FilterColor color={theme.blue} />
              <FilterColor color={theme.green} />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>




      <Newsletter />
      <Footer />
    </Container>
  );
}