<script setup lang="ts">
defineProps({
    id: {
        type: String,
        default: 'buttonId'
    },
    type: {
        type: String,
        default: "button"
    },
    text: {
        type: String,
        default: "Don't look at this please :)"
    },
    classes: {
        type: String,
        default: "text-sm px-2 py-1 uppercase border border-green-400 font-medium hover:bg-gray-100"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    block: {
        type: Boolean,
        default: false
    }
});
function onClick() {
    console.log("click");
}
</script>
<template>
    <button 
        :id="id"
        :type="type"
        @click="onClick"
        :class="[classes, {
            'bg-gray-100': disabled,
            'cursor-not-allowed': disabled,
            'inline-block': block,
            'w-full': block,
        }]" 
        :disabled="disabled">{{ text }}<slot/></button>
</template>