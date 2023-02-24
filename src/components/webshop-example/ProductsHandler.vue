<script setup lang="ts">
import { onMounted, toRefs } from "vue";
import { useProductStore } from "../../stores/products";

const productStore = useProductStore();

const props = defineProps({
  apiUrl: String,
});

const { products } = toRefs(productStore.$state);

onMounted(() => {
  productStore
    .fetchProducts(props.apiUrl)
    .catch((error) => console.log("ERROR", error));
});
</script>

<template>
  <slot :products="products" />
</template>
