<script setup lang="ts">
const { isOpen, setIsOpen } = defineProps<{
    isOpen: boolean;
    setIsOpen: () => void;
}>();
</script>

<template>
    <!-- Overlay -->
    <div
        v-if="isOpen"
        @click="setIsOpen"
        class="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
    ></div>

    <!-- Sidebar -->
    <div
        class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
        <div class="flex justify-end p-4">
            <button
                @click="setIsOpen"
                class="text-gray-600 hover:text-black"
            >
                ✕
            </button>
        </div>
        <nav class="px-4 space-y-2">
            <a href="#" class="block text-gray-800 hover:text-blue-600">Home</a>
            <a href="#" class="block text-gray-800 hover:text-blue-600"
                >About</a
            >
            <a href="#" class="block text-gray-800 hover:text-blue-600"
                >Contact</a
            >
        </nav>
    </div>
</template>
