import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [] as Product[],
};

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
};

type FetchProductsPayload = {
  filterParams: { [key: string]: string[] };
  sortParams: string;
};

type FetchProductsResponse = {
  success: boolean;
  data: Product[];
};

export const fetchAllFilteredProducts = createAsyncThunk<
  FetchProductsResponse,
  FetchProductsPayload
>("/products/fetchAllProducts", async ({ filterParams, sortParams }) => {
  console.log(fetchAllFilteredProducts, "fetchAllFilteredProducts");

  const query = new URLSearchParams({
    ...filterParams,
    sortBy: sortParams,
  });

  const result = await axios.get(
    `http://localhost:5000/api/shop/products/get?${query}`
  );

  console.log(result);

  return result?.data;
});

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        console.error("Fetch rejected:", action.error.message);
        state.isLoading = false;
        state.productList = [];
      });
  },
});

export default shoppingProductSlice.reducer;
