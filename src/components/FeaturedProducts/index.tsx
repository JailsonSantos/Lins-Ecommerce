import React, { useEffect, useState } from 'react';
import { Product } from '../Product';
import { Container } from './styles';
import { publicRequest } from '../../services/api';

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

export function FeaturedProducts() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await publicRequest.get("products");
        setProducts(response.data);
      } catch (err: any) {
        console.log(err.message)
      }
    };
    getProducts();
  }, []);

  return (
    <Container>
      {products.slice(0, 8).map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </Container>
  );
}