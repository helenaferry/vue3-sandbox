<script setup lang="ts">
import { toRefs, provide, onMounted } from "vue";
import { useCartStore } from "../../stores/cart";
import type { ProductModel } from "../../models/ProductModel";

const props = defineProps({
  apiUrl: String,
});

const cartStore = useCartStore();

const { cart } = toRefs(cartStore.$state);

function decreaseQuantity(product: ProductModel) {
  cartStore.decreaseQuantity(product);
}

function increaseQuantity(product: ProductModel) {
  cartStore.increaseQuantity(product);
}

function updateQuantity(product: ProductModel, quantity: number) {
  cartStore.updateQuantity(product, quantity);
}

function getQuantity(productId: string) {
  return cart.value.find((item) => item.product.id === productId)?.quantity;
}

onMounted(() => {
  cartStore
    .fetchCart(props.apiUrl)
    .catch((error) => console.log("ERROR", error));
});

provide("cart", {
  decreaseQuantity,
  increaseQuantity,
  updateQuantity,
  getQuantity,
});
</script>

<template>
  <slot :cart="cart" />
</template>
