<script setup lang="ts">
useHead({
    title: 'Login',
});
definePageMeta({
    layout: 'auth',
    title: 'Login',
});
</script>

<template>
    <div
        class="flex flex-col justify-between pt-6 pb-10 px-5 h-[calc(100vh-80px)]"
    >
        <div class="space-y-3">
            <h1
                class="font-Exo2-SemiBold text-lg text-gray-300 first-letter:capitalize"
            >
                enter your username and password to access your account
            </h1>
            <Input
                title="username"
                type="text"
                name="username"
                placeholder="Enter your username"
            ></Input>
            <Input
                title="cloud password"
                type="password"
                name="password"
                placeholder="Enter your password"
            ></Input>
        </div>
        <NuxtLink to="/login/seed">
            <Button title="login"></Button>
        </NuxtLink>
    </div>
</template>
