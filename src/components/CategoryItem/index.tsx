import Link from 'next/link';
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
    cat: string;
  }
}

export function CategoryItem({ category }: CategoryItemProps) {

  return (
    <Container>
      <Link href={`/category/${category.cat}`}>
        <a>
          <Image src={category.img} />
          <Info>
            <Title>{category.title}</Title>
            <Button>VER PRODUTOS</Button>
          </Info>
        </a>
      </Link>
    </Container>
  );
}