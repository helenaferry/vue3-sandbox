<script setup lang="ts">
import { provide, reactive } from "vue";
import type { ProductModel } from "../models/ProductModel";

const props = defineProps({
    quantity: Number,
});

const state = reactive({ qty: props.quantity })

const { cart } = [];

function decreaseQuantity(product: ProductModel) {
    state.qty--;
    console.log('decreaseQuantity');
    return;
}

function increaseQuantity(product: ProductModel) {
    state.qty++;
    console.log('increaseQuantity');
    return;
}

function updateQuantity(product: ProductModel, quantity: number) {
    state.qty = quantity;
    console.log('updateQuantity');
    return;
}

function getQuantity(productId: string) {
    return state.qty;
}

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
