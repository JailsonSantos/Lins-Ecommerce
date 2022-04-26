import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductProps {
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
  total?: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}


export interface SliceState {
  products?: ProductProps[];
  quantity: number;
  total: number;
  color?: string;
  size?: string;
}

const initialState: SliceState = {
  products: [
    {
      _id: '',
      title: '',
      description: '',
      img: '',
      categories: [''],
      size: '',
      color: '',
      price: 0,
      inStock: true,
      createdAt: '',
      updatedAt: '',
      __v: 0,
      quantity: 0,
      total: 0,
    }
  ],
  quantity: 0,
  total: 0,
}

//console.log(initialState)

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<SliceState>) => {
      state.quantity += 1;
      state.total += action.payload.total;
      // state.products && state.products.push(action.payload);

      if (state?.products?.[0]?._id === '') {
        state.products[0] = action.payload;
      } else {
        state.products?.push(action.payload);
      }
    },
  }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;