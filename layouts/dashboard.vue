<script setup lang="ts">
import DefaultLayout from './default.vue';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';

const isOpen = ref<boolean>(false);
</script>

<template>
    <DefaultLayout>
        <div
            class="w-full h-20 flex items-center justify-between bg-gray-900 px-4"
        >
            <button @click="isOpen = !isOpen">
                <Bars3Icon class="size-5 text-white" />
            </button>
            <div class="flex items-center justify-center space-x-2">
                <img src="~/assets/images/Logo.svg" class="size-6" alt="logo" />
                <p class="text-white capitalize text-sm">Chatty</p>
            </div>
            <MagnifyingGlassIcon class="size-5 text-white" />
        </div>
        <Sidebar :is-open="isOpen" @close="isOpen = false"></Sidebar>
        <slot />
    </DefaultLayout>
</template>
