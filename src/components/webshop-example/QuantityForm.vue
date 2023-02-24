<script setup lang="ts">
import { inject, computed } from "vue";
import type { ProductModel } from "../../models/ProductModel";
const props = defineProps({
  product: {
    type: Object as () => ProductModel,
    required: true,
  },
});

const myQuantity = computed({
  get() {
    return getQuantity(props.product.id);
  },
  set(newValue) {
    updateQuantity(props.product, newValue);
  },
});

const { decreaseQuantity, increaseQuantity, updateQuantity, getQuantity } =
  inject("cart");
</script>
<template>
  <div className="flex items-center justify-center">
    <template v-if="myQuantity > -1">
      <FormKit type="button" @click="decreaseQuantity(product)">-</FormKit>
      <FormKit type="number" min="0" v-model="myQuantity"></FormKit>
      <FormKit type="button" @click="increaseQuantity(product)">+</FormKit>
    </template>
    <template v-else>
      <FormKit type="button" @click="increaseQuantity(product)">Add to cart</FormKit>
    </template>
  </div>
</template>
