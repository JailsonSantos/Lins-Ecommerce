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
import { Pagination } from '../../../components/Pagination';

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
  const [filters, setFilters] = useState<any>({});

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
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>Preta</Option>
            <Option>Branco</Option>
            <Option>Marron</Option>
            <Option>Azul</Option>
            <Option>Vermelho</Option>
            <Option>Verde</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>P</Option>
            <Option>M</Option>
            <Option>G</Option>
            <Option>GG</Option>
            <Option>XG</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(event) => setSort(event.target.value)}>
            <Option value="newest">Mais novo</Option>
            <Option value="asc">Preço (Min)</Option>
            <Option value="desc">Preço (Max)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}