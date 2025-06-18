<template>
    <button
        class="py-3 font-Exo2-Medium text-xs w-full text-center capitalize bg-gray-900 text-white rounded-lg"
    >
        {{ props.title }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();
</script>
