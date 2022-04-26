import React, { useState } from 'react';
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

import { useRouter } from 'next/router';

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

  const [filters, setFilters] = useState<FilterProps>({} as FilterProps);
  const [sort, setSort] = useState('newest')

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
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(event) => setSort(event.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}