<script setup lang="ts">
import PageLayout from "../components/PageLayout.vue";
import ProductsHandler from "../components/webshop-example/ProductsHandler.vue";
import ProductListing from "../components/webshop-example/ProductListing.vue";
import CartHandler from "../components/webshop-example/CartHandler.vue";
import CartItems from "../components/webshop-example/CartItems.vue";
</script>

<template>
    <PageLayout>
        <section>
            <CartHandler api-url="/api/cart">
                <ProductsHandler api-url="/api/products" v-slot="{ products }">
                    <ProductListing :products="products" />
                </ProductsHandler>
            </CartHandler>
        </section>

        <section>
            <CartHandler api-url="/api/cart" v-slot="{ cart }">
                <CartItems :cart="cart"></CartItems>
            </CartHandler>
        </section>
    </PageLayout>
</template>
