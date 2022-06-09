import React from 'react';
import { categories } from '../../Database';
import { CategoryItem } from '../CategoryItem';

import {
  Container,
  CategoriesTitle,
  CategoriesList
} from './styles';

export function Categories() {

  // Trocar a chamada das categorias da API FAKE, pelas do MONGO DB.

  return (
    <Container>
      <CategoriesTitle>Categorias</CategoriesTitle>
      <CategoriesList>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </CategoriesList>
    </Container>
  );
}