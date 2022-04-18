import React from 'react';

import {
  Container,
  Image,
  Info,
  Title,
  Button
} from './styles';

interface CategoryItemProps {
  category: {
    id: number;
    img: string;
    title: string;
  }
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Container>
      <Image src={category.img} />
      <Info>
        <Title>{category.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}