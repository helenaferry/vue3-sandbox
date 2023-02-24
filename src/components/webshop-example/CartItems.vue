<script setup lang="ts">
import { computed } from "vue";
import type { CartItemModel } from "../../models/CartItemModel";
import QuantityForm from "./QuantityForm.vue";
const props = defineProps({
  cart: {
    type: Array as () => CartItemModel[],
    required: true,
  },
});

const cartTotal = computed(() => {
  return props.cart.length === 0
    ? 0
    : props.cart
        .map((item) => item.quantity * item.product.price)
        .reduce((sum, price) => (sum += price));
});

// const { addToCart } = inject("cart");
</script>
<template>
  <table class="w-full my-5">
    <thead>
      <tr>
        <td>CART</td>
      </tr>
    </thead>
    <tr v-for="cartItem in cart" :key="cartItem.product.id">
      <td>{{ cartItem.product.name }}</td>
      <td>{{ cartItem.product.id }}</td>
      <td><QuantityForm :product="cartItem.product" /></td>
      <td>x {{ cartItem.product.price }}</td>
      <td>{{ cartItem.quantity * cartItem.product.price }}</td>
    </tr>
    <tr>
      <td>TOTAL: {{ cartTotal }} kr</td>
    </tr>
  </table>
</template>
