<script setup lang="ts">
const props = defineProps<{ value: string }>();
</script>

<template>
    <div class="size-4 rounded-full flex items-center justify-center bg-green-500">
        <p class="font-Exo2-Regular text-[10px] text-white">{{ props.value  }}</p>
    </div>
</template>