<script setup lang="ts">
import DefaultLayout from './default.vue';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <DefaultLayout>
        <div
            class="w-full h-20 flex items-center justify-between bg-gray-900 px-4"
        >
            <Bars3Icon class="size-5 text-white" />
            <div class="flex items-center justify-center space-x-2">
                <img src="~/assets/images/Logo.svg" class="size-6" alt="logo" />
                <p class="text-white capitalize text-sm">Chatty</p>
            </div>
            <MagnifyingGlassIcon class="size-5 text-white" />
        </div>
    </DefaultLayout>
</template>
