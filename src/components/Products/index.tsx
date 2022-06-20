import React, { useEffect, useState } from 'react';
import { Product } from '../Product';
import { Container, ProductList } from './styles';
import { publicRequest } from '../../services/api';
import { Pagination } from '../Pagination';
import { useProducts } from '../../services/hooks/useProducts';
//import { useProducts } from '../../services/hooks/useProducts';

import { useQuery } from 'react-query';
import ReactLoading from 'react-loading';
import { chownSync } from 'fs';
import theme from '../../styles/theme';
import toast from 'react-hot-toast';

interface ProductsProps {
  category: string;
  filters?: {
    color: string;
    size: string;
  };
  sort?: string;
}

interface ProductsListProps {
  _id: string;
  title: string;
  description: string;
  categories: string[];
  color: string[];
  img: string;
  price: number;
  size: string[];
  createdAt: string;
  key: {
    color: string;
    size: string;
  }
}


type FilteredProductsProps = {
  _id: string;
  title: string;
  description: string;
  img: string;
  categories: string[];
  size: string[];
  color: string[];
  price: number;
  inStock: true;
  quantity: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}

export function Products({ category, filters, sort }: ProductsProps) {

  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useProducts(page, category);

  const [filteredProducts, setFilteredProducts] = useState<FilteredProductsProps[]>([]);

  useEffect(() => {
    try {
      filters?.color && data !== undefined &&
        setFilteredProducts(
          data.products.filter((item: any) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value) // every pega key, value e verifica se o item[key] tem incluido um valor (retorna false ou true)
            )
          )
        );
    } catch (error) {
      toast("Error: Ao carregar dados, tente nomamente! ", {
        style: {
          background: theme.error,
          color: theme.text,
        }
      });
    }
  }, [data, category, filters]);

  useEffect(() => {

    if (sort === "newest") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => Number(a.createdAt) - Number(b.createdAt)));

    } else if (sort === "asc") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price)); // Menor Preço
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price)); // Maior Preço
    }
  }, [sort]);

  return (
    <Container>
      {
        isLoading ? <ReactLoading type="spokes" height="30px" width="30px" color={theme.primary} />
          : filteredProducts.length > 0 ?
            <>
              {filteredProducts.map((product) => (
                <Product key={product._id} product={product} />
              ))}
              <Pagination
                totalCountOfRegisters={data!.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
            :
            <>
              {data!.products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
              <Pagination
                totalCountOfRegisters={data!.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
      }
    </Container>
  );
}