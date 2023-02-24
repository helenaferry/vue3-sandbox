import { defineStore } from "pinia";
import type { ProductModel } from "../models/ProductModel";

type RootState = {
  products: ProductModel[];
};

export const useProductStore = defineStore({
  id: "products",
  state: () =>
    ({
      products: [],
    } as RootState),
  getters: {
    products: (state) => state.products,
  },
  actions: {
    async fetchProducts(apiUrl: string | undefined) {
      if (!apiUrl) return;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Response not ok: " + response.status);
      }
      const jsonData = await response.json();
      if (!jsonData.products) {
        throw new Error("Unexpected response");
      }
      this.$state.products = [...jsonData.products];
    },
  },
});
