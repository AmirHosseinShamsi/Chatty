<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import DefaultLayout from './default.vue';

const { meta } = useRoute();
const router = useRouter();
</script>

<template>
    <DefaultLayout>
        <div class="w-full h-20 flex items-center bg-gray-900 px-4">
            <div class="flex-1 flex justify-start">
                <button @click="router.back()">
                    <arrow-left-icon class="size-6 text-white" />
                </button>
            </div>
            <div class="flex-1 flex items-center justify-center space-x-2">
                <img src="~/assets/images/Logo.svg" class="size-6" alt="logo" />
                <p class="text-white capitalize">{{ meta.title }}</p>
            </div>
            <div class="flex-1"></div>
        </div>
        <slot />
    </DefaultLayout>
</template>

<style scoped></style>
