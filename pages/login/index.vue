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

const inputUsername = ref<string>('');
const inputPassword = ref<string>('');

const onSubmit = () => {
    console.log('submit done!');
    store.login(inputUsername.value, inputPassword.value);
};
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
            <form class="space-y-3" @submit.prevent="onSubmit">
                <Input
                    title="username"
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    v-model:input-value="inputUsername"
                ></Input>
                <Input
                    title="cloud password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    v-model:input-value="inputPassword"
                ></Input>
                <Button title="login" type="submit"></Button>
            </form>
        </div>
    </div>
</template>
