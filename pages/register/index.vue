<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

// useHead({
//     title: 'Register',
// });
definePageMeta({
    layout: 'auth',
    title: 'Register',
});
const store = useAuthStore();
const errorResponse = ref<string | null>(null);
const inputData = reactive({
    fullName: '',
    username: '',
    password: '',
});

const onSubmit = async () => {
    errorResponse.value = await store.register(inputData);
};
</script>

<template>
    <div class="px-5 pt-6 pb-10 h-[calc(100vh-80px)]">
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
            <form
                action="#"
                class="space-y-3 flex flex-col flex-1"
                @submit.prevent="onSubmit"
            >
                <Input
                    name="fullName"
                    placeholder="Enter your fullName"
                    type="text"
                    title="Enter your fullName"
                    v-model:input-value="inputData.fullName"
                ></Input>
                <Input
                    name="username"
                    placeholder="Enter your username"
                    type="text"
                    title="Enter your username"
                    v-model:input-value="inputData.username"
                ></Input>
                <Input
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    title="Enter your password"
                    v-model:input-value="inputData.password"
                ></Input>
                <p
                    class="font-Exo2-SemiBold text-xs text-red-600"
                    v-show="errorResponse"
                >
                    {{ errorResponse }}
                </p>
                <Button title="continue" class="mt-10"></Button>
            </form>
        </div>
    </div>
</template>
