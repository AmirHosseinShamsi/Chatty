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
    <div class="px-5 flex flex-col justify-between h-full">
        <div class="space-y-3">
            <!--profile picture-->
            <div class="flex flex-col items-center">
                <!-- Preview (Initially shows a placeholder) -->
                <div class="relative">
                    <div
                        class="w-32 h-32 flex items-center justify-center rounded-full object-cover bg-gray-900"
                    >
                        <img
                            class="size-12"
                            src="~/assets/images/ProfilePreview.svg"
                            alt="Profile Preview"
                        />
                    </div>

                    <!-- Upload Button Overlay -->
                    <label
                        for="avatar-upload"
                        class="absolute bottom-0 right-0 bg-gray-900 border border-gray-800 p-2 rounded-full"
                    >
                        <img
                            src="~/assets/images/PaperClipIcon.svg"
                            alt="paper-clip-icon"
                        />
                        <input
                            type="file"
                            id="avatar-upload"
                            accept="image/*"
                            class="hidden"
                        />
                    </label>
                </div>
            </div>
            <!-- inputs -->
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
        <Button title="continue"></Button>
    </div>
</template>
