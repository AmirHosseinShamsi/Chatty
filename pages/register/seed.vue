<script setup lang="ts">
useHead({
    title: 'Seed',
});
definePageMeta({
    layout: 'auth',
    title: 'Register/Seed',
});

const seedItems = Array.from({ length: 12 });
</script>

<template>
    <div class="px-4">
        <div class="w-full max-w-[300px] rounded-lg bg-gray-900 p-2">
            <p class="font-Exo2-Regular text-gray-300 text-xs text-justify">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Pharetra
                porta neque primis vulputate netus auctor volutpat dignissim.
                Massa fames aliquam morbi mattis velit arcu. Elementum est
                mollis elementum velit, neque interdum sed. Quam egestas
            </p>
        </div>
        <div>
            <h1 class="text-xs text-gray-300 capitalize">your seeds</h1>
            <div class="grid grid-cols-3 gap-3">
                <div
                    class="rounded-lg bg-gray-900 text-center py-2 px-4"
                    v-for="(_, index) in seedItems"
                    :key="index"
                >
                    <p class="text-xs text-gray-300">test {{ index + 1 }}</p>
                </div>
            </div>
            <div class="w-full max-w-32 mx-auto">
                <Button title="regenerate seeds"></Button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
