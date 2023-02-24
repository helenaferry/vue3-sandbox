<script setup lang="ts">
import type { ProductModel } from "../../models/ProductModel";
import QuantityForm from "./QuantityForm.vue";
defineProps({
  product: {
    type: Object as () => ProductModel,
    required: true,
  },
});
</script>
<template>
  <div class="flex-1 px-1 py-2 m-1 border border-black text-center">
    <h1>{{ product.name }}</h1>
    <p>{{ product.id }}</p>
    <p>{{ product.displayPrice }}</p>
    <QuantityForm :product="product"></QuantityForm>
  </div>
</template>
