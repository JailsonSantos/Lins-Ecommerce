import React from 'react';
import { categories } from '../../Database';
import { CategoryItem } from '../CategoryItem';

import {
  Container
} from './styles';

export function Categories() {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
}