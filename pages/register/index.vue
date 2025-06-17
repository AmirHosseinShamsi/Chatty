<script setup lang="ts">
useHead({
    title: 'Register',
});
definePageMeta({
    layout: 'auth',
    title: 'Register',
});

interface InputsData {
    title: string;
    name: string;
    placeholder: string;
    type: string;
}

const inputsData: InputsData[] = [
    {
        title: 'Username',
        name: 'username',
        placeholder: 'Enter your username',
        type: 'text',
    },
    {
        title: 'Nickname',
        name: 'nickname',
        placeholder: 'Enter your nickname',
        type: 'text',
    },
    {
        title: 'password',
        name: 'password',
        placeholder: 'Enter your password',
        type: 'password',
    },
];
</script>

<template>
    <div class="px-5 space-y-3">
        <div class="flex flex-col gap-y-1" v-for="item in inputsData">
            <p class="text-white text-sm capitalize">{{ item.title }}</p>
            <input
                :type="item.type"
                :name="item.name"
                autocomplete="off"
                class="py-2 px-3 rounded-lg bg-gray-900 placeholder:text-gray-500 placeholder:text-xs placeholder:capitalize focus:outline-0 text-white text-xs"
                :placeholder="item.placeholder"
            />
        </div>
    </div>
</template>
