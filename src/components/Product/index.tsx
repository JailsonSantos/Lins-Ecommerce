import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import Link from 'next/link';
import React from 'react';

import {
  Container,
  Circle,
  Image,
  Info,
  Icon,
  IconPrice,
  InfoAreaIcon
} from './styles';

interface ProductProps {
  product: {
    _id: string;
    title: string;
    description: string;
    categories: string[];
    color: string[];
    img: string;
    price: number;
    size: string[];
  }
}

export function Product({ product }: ProductProps) {

  return (
    <Container>
      {/*    <Circle /> */}
      <Image src={product.img} />
      <Info>
        <InfoAreaIcon>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link href={`/product/${product._id}`}>
              <a>
                <SearchOutlined />
              </a>
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </InfoAreaIcon>
        <IconPrice>
          Valor do Produto: R$ {product.price.toFixed(2)}
        </IconPrice>
      </Info>

    </Container>
  );
}