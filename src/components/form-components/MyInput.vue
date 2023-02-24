<script setup lang="ts">
import { propsToAttrMap } from '@vue/shared';

const props = defineProps({
    type: {
        type: String,
        required: true
    },
    id: {
        type: String
    },
    variant: {
        type: String
    }
});
const variants = {
    email: {
        name: "email",
        validation: "required|email",
    }
};
const myId = (props.id) ? props.id : ((props.variant) ? variants[props.variant].id : '');
</script>
<template>
    <FormKit :id="myId" :type="type">
    </FormKit>
</template>