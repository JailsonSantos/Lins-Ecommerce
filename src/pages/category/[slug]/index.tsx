import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { Products } from '../../../components/Products';
import { Newsletter } from '../../../components/Newsletter';
import { Announcement } from '../../../components/Announcement';

import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from '../../../styles/ProductListStyles';

interface EventProps {
  target: {
    value: string;
    name: string;
  }
}

interface FilterProps {
  color: string;
  size: string;
}

export default function ProductsList() {

  const router = useRouter();
  const category = router.query.slug;

  const [sort, setSort] = useState('newest');
  const [filters, setFilters] = useState<FilterProps>({} as FilterProps);

  // APPLY FILTERS
  const handleFilters = (event: EventProps) => {
    const value = event.target.value;
    setFilters({
      ...filters,
      [event.target.name]: value,
    });
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Categoria: {category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option value="todas">Todas as cores</Option>
            <Option value="Yellow">Amarelo</Option>
            <Option value="Blue">Azul</Option>
            <Option value="Beige">Bege</Option>
            <Option value="White">Branco</Option>
            <Option value="Gray">Cinza</Option>
            <Option value="Orange">Laranja</Option>
            <Option value="Brown">Marron</Option>
            <Option value="Black">Preto</Option>
            <Option value="Purple">Roxo</Option>
            <Option value="Pink">Rosa</Option>
            <Option value="Green">Verde</Option>
            <Option value="Red">Vermelho</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option value="todas">Todos os tamanhos</Option>
            <Option>P</Option>
            <Option>M</Option>
            <Option>G</Option>
            <Option>GG</Option>
            <Option>XG</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Produtos:</FilterText>
          <Select onChange={(event) => setSort(event.target.value)}>
            <Option value="newest">Mais novo</Option>
            <Option value="desc">Maior Preço</Option>
            <Option value="asc">Menor Preço</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={String(category!)} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}