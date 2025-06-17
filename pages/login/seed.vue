<script setup lang="ts">
useHead({
    title: 'login/seed',
});
definePageMeta({
    layout: 'auth',
    title: 'Login/Seed',
});
const seedItems = Array.from({ length: 12 });
</script>

<template>
    <div
        class="px-8 py-10 *:w-full flex flex-col items-center justify-between h-[calc(100vh-80px)]"
    >
        <!--seeds section-->
        <div class="space-y-4">
            <Input
                title="Cloud Password"
                placeholder="Enter your password"
                name="password"
                type="password"
            ></Input>
            <h1 class="text-xs text-gray-300 capitalize">your seeds</h1>
            <div class="grid grid-cols-3 gap-3">
                <Input
                    v-for="(_, index) in seedItems"
                    :key="index"
                    type="text"
                    :placeholder="`${index + 1} -`"
                ></Input>
            </div>
        </div>
    </div>
</template>
