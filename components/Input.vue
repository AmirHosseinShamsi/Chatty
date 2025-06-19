<script setup lang="ts">
interface Props {
    title?: string;
    type: string;
    name?: string;
    placeholder: string;
}

const props = defineProps<Props>();
const inputValue = defineModel('inputValue');
</script>

<template>
    <div class="flex flex-col gap-y-1">
        <p class="text-white text-sm capitalize">{{ props.title }}</p>
        <input
            :type="props.type"
            :name="props.name"
            autocomplete="off"
            class="py-2 px-3 rounded-lg bg-gray-900 placeholder:text-gray-500 placeholder:text-xs placeholder:capitalize focus:outline-0 text-white text-xs"
            :placeholder="props.placeholder"
            v-model.lazy="inputValue"
        />
    </div>
</template>
