import React from 'react';
import { Product } from '../Product';
import { popularProducts } from '../../Database';

import {
  Container
} from './styles';

export function Products() {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
}