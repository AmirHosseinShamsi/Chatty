<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import DefaultLayout from './default.vue';

const { meta } = useRoute();
const router = useRouter();
</script>

<template>
    <DefaultLayout>
        <div class="relative w-full h-20 flex items-center justify-center bg-gray-900 px-4">
            <button @click="router.back()" class="absolute left-4">
                <arrow-left-icon class="size-6 text-white" />
            </button>
            <div class="flex items-center space-x-2">
                <img src="~/assets/images/Logo.svg" class="size-6" alt="logo" />
                <p class="text-white capitalize text-sm">{{ meta.title }}</p>
            </div>
        </div>
        <slot />
    </DefaultLayout>
</template>

<style scoped></style>
