/* import { publicRequest } from "../api";
import { useQuery } from "react-query";

type Product = {
  _id: string;
  title: string;
  description: string;
  img: string;
  categories: string[];
  size: string;
  color: string;
  price: number;
  inStock: true;
  quantity: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}

type GetProductResponse = {
  totalCount: number;
  products: Product[];
}

// Função de busca de usuarios na api
export async function getProducts(page: number): Promise<GetProductResponse> {
  const { data, headers } = await publicRequest.get('products', {
    params: {
      page,
    }
  })

  const totalCount = Number(headers['x-total-count'])

  // Formatando os dados de users
  const products = data.products.map((product: Product) => {
    return {
      id: product._id,
      title: product.title,
      description: product.description,
      img: product.img,
      categories: product.categories,
      size: product.size,
      color: product.color,
      price: product.price,
      inStock: product.inStock,
      quantity: product.quantity,
      total: product.total,
      createdAt: new Date(product.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      updatedAt: new Date(product.updatedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  return {
    products,
    totalCount
  };
}

// Função de buscar ou atualizar produtos do React Query
export function useProducts(page: number) {
  return useQuery(['products', page], () => getProducts(page), {
    staleTime: 1000 * 60 * 10, // Define o tempo que vai estar em fresh por 10 minutos
  });
} */