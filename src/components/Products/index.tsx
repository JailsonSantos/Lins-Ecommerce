import React, { useEffect, useState } from 'react';
import { Product } from '../Product';
import { popularProducts } from '../../Database';

import {
  Container
} from './styles';
import { publicRequest } from '../../services/api';
import axios from 'axios';

/* interface CategoryProps {
  category?: string | string[];
}
interface SortProps {
  sort?: string | string[];
}

*/


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
/* 
inStock: true

updatedAt: "2022-04-19T19:14:02.455Z"
*/

export function Products({ category, filters, sort }: ProductsProps) {

  // console.log(category, filters, sort);

  //  console.log(filters?.color)
  // console.log(filters?.size)
  /* 
    const [productsList, setProductsList] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
   */
  const [products, setProducts] = useState<ProductsListProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductsListProps[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await publicRequest.get(
          category
            ? `products?category=${category}`
            : "products"
        );
        setProducts(response.data);
      } catch (err) { }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category || filters !== undefined &&
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
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) => [...prev].sort((b, a) => b.price - a.price));
    }
  }, [sort]);

  //console.log(typeof products[0].createdAt)

  /*  // GET ALL PRODUCTS OR PRODUCTS FOR CATEGORIES
   useEffect(() => {
     const getProducts = async () => {
       try {
         const response = await api.get(
           category
             ? `products?category=${category}`
             : "products"
         );
         setProductsList(response.data);
       } catch (error) {
         console.log(error);
       }
     };
 
     getProducts();
   }, [category]); */
  /* 
    useEffect(() => {
      category || filters !== undefined &&
  
        productsList.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
  
      setFilteredProducts(productsList);
  
    }, [productsList, category, filters]);
   */

  // console.log(category);

  return (
    <Container>
      {/* 
      {
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))
      } */}

      {category ?
        <>
          {
            filteredProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))
          }
        </>
        :
        <>
          {
            products.slice(0, 3).map((product) => (
              <Product key={product._id} product={product} />
            ))
          }
        </>
      }


      {/*   
           {
        filteredProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))
      }

      */}
    </Container>
  );
}