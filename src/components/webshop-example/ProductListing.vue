<script setup lang="ts">
import type { ProductModel } from "../../models/ProductModel";
import ProductItem from "./ProductItem.vue";
defineProps({
  products: {
    type: Array as () => ProductModel[],
    required: true,
  },
});
</script>
<template>
  <div class="flex">
    <template v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
    </template>
  </div>
</template>
