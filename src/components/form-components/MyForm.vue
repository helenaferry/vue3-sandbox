<script setup lang="ts">
import { ref, inject } from 'vue';
const myForm = ref(null);

const validationMessages = ref([]);
defineProps({
    id: {
        type: String,
        default: 'myForm'
    },
});
</script>
<template>
    <FormKit :id="id" ref="myForm">
        <div v-if="validationMessages.length" className="border p-2">
            <p>Följande fält innehåller fel:</p>
            <ul>
                <li v-for="validationMessage in validationMessages" :key="validationMessage.field">
                    {{ validationMessage.field }}: {{ validationMessage.message }}
                </li>
            </ul>
        </div>
        <slot/>
    </FormKit>
</template>