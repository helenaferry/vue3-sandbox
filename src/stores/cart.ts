import { defineStore } from "pinia";
import type { CartItemModel } from "../models/CartItemModel";
import type { ProductModel } from "../models/ProductModel";

type RootState = {
  cart: CartItemModel[];
};

export const useCartStore = defineStore({
  id: "cart",
  state: () =>
    ({
      cart: [],
    } as RootState),
  getters: {
    cart: (state) => state.cart,
  },
  actions: {
    async fetchCart(apiUrl: string | undefined) {
      if (!apiUrl || this.$state.cart.length > 0) return;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Response not ok: " + response.status);
      }
      const jsonData = await response.json();
      if (!jsonData.cart) {
        throw new Error("Unexpected response");
      }
      this.$state.cart = [...jsonData.cart];
    },
    // TODO send all these changes to backend as well, of course :)
    addToCart(cartItem: CartItemModel) {
      if (
        this.$state.cart.find((item) => item.product.id == cartItem.product.id)
      ) {
        this.increaseQuantity(cartItem.product);
      } else {
        this.$state.cart.push(cartItem);
      }
    },
    removeFromCart(id: string) {
      this.$state.cart.splice(
        this.$state.cart.findIndex((item) => item.product.id === id),
        1
      );
    },
    decreaseQuantity(product: ProductModel) {
      const cartItem = this.$state.cart.find(
        (item) => item.product.id === product.id
      );
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
      } else if (cartItem && cartItem.quantity == 1) {
        this.removeFromCart(cartItem.product.id);
      }
    },
    increaseQuantity(product: ProductModel) {
      let cartItem = this.$state.cart.find(
        (item) => item.product.id === product.id
      );
      if (cartItem) {
        cartItem.quantity++;
      } else {
        cartItem = {
          product: {
            id: product.id,
            name: product.name,
            displayPrice: product.displayPrice,
            price: product.price,
          },
          quantity: 1,
        };
        this.addToCart(cartItem);
      }
    },
    updateQuantity(product: ProductModel, quantity: number) {
      const cartItem = this.$state.cart.find(
        (item) => item.product.id === product.id
      );
      if (cartItem) {
        cartItem.quantity = quantity;
      } else {
        this.addToCart({
          product: {
            id: product.id,
            name: product.name,
            displayPrice: product.displayPrice,
            price: product.price,
          },
          quantity: quantity,
        });
      }
    },
  },
});
