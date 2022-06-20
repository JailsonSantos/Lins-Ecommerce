import { publicRequest } from "../api";
import { useQuery } from "react-query";

type Product = {
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

type GetProductsResponse = {
  totalCount: number;
  products: Product[];
}

// Função de busca de produtos na api
export async function getProducts(page: number, category: string): Promise<GetProductsResponse> {

  const { data } = await publicRequest.get("products", {
    params: {
      category,
      page
    }
  });
  const totalCount = data.total;

  // Formatando os dados de users
  const products = data.products.map((product: Product) => {
    return {
      _id: product._id,
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
  });

  return {
    products,
    totalCount
  };
}

// Função de buscar ou atualizar produtos do React Query
export function useProducts(page: number, category: string) {
  return useQuery(['products', page, category], () => getProducts(page, category), {
    staleTime: 1000 * 60 * 10, // Define o tempo que vai estar em fresh de 10 minutos
  });
}

//staleTime: 1000 * 5,  Define o tempo que vai estar em fresh de 5 segundos