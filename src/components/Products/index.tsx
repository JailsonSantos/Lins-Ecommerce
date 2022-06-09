import React, { useEffect, useState } from 'react';
import { Product } from '../Product';
import { Container, ProductList } from './styles';
import { publicRequest } from '../../services/api';
import { Pagination } from '../Pagination';
//import { useProducts } from '../../services/hooks/useProducts';

interface ProductsProps {
  category?: string | string[];
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

export function Products({ category, filters, sort }: ProductsProps) {

  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const [page, setPage] = useState(1);
  //  const { data, isLoading, isFetching, error } = useProducts(page);
  //  console.log(data)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await publicRequest.get(
          category
            ? `products?category=${category}`
            : "products"
        );
        setProducts(response.data);
      } catch (err: any) {
        console.log(err.message)
      }
    };
    getProducts();
  }, [category]);


  useEffect(() => {
    category && filters !== undefined &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value) // every pega key, value e verifica se o item[key] tem incluido um valor (retorna false ou true)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {

    if (sort === "newest") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "asc") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price)); // Menor Preço
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price)); // Maior Preço
    }
  }, [sort]);

  return (
    <Container>
      {
        category ?
          <>
            {filteredProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))}
            <Pagination
              totalCountOfRegisters={filteredProducts.length}
              currentPage={page}
              onPageChange={setPage}
            />

          </>
          :
          <>
            <ProductList>Produtos em Destaque</ProductList>
            <Container>
              {products.slice(0, 12).map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </Container>
          </>
      }
    </Container>
  );
}