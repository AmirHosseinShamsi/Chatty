<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

useHead({
    title: 'Login',
});
definePageMeta({
    layout: 'auth',
    title: 'Login',
});

const store = useAuthStore();
const errorResponse = ref<string | null>(null);

const inputData = reactive({
    username: '',
    password: '',
});
const onSubmit = async () => {
    errorResponse.value = await store.login(inputData);
};
</script>

<template>
    <div class="pt-6 pb-10 px-5 h-[calc(100vh-80px)] flex flex-col">
        <h1
            class="font-Exo2-SemiBold text-lg text-gray-300 first-letter:capitalize"
        >
            enter your username and password to access your account
        </h1>
        <form class="space-y-3 flex flex-col flex-1" @submit.prevent="onSubmit">
            <Input
                title="username"
                type="text"
                name="username"
                placeholder="Enter your username"
                v-model:input-value="inputData.username"
            ></Input>
            <Input
                title="cloud password"
                type="password"
                name="password"
                placeholder="Enter your password"
                v-model:input-value="inputData.password"
            ></Input>
            <p
                class="font-Exo2-SemiBold text-xs text-red-600"
                v-show="errorResponse"
            >
                {{ errorResponse }}
            </p>
            <Button title="login" type="submit" class="mt-auto"></Button>
            <NuxtLink to="/register" class="mt-1">
                <p class="text-gray-300 font-Exo2-Regular text-xs text-center">
                    don't you have an account ?
                </p>
            </NuxtLink>
        </form>
    </div>
</template>
