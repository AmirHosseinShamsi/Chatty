<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid';
import {
    UserCircleIcon,
    WalletIcon,
    InformationCircleIcon,
    ArrowRightStartOnRectangleIcon,
} from '@heroicons/vue/24/outline';
//props
const { isOpen } = defineProps<{
    isOpen: boolean;
}>();

//emit
const emit = defineEmits(['close']);
</script>

<template>
    <!-- Overlay -->
    <div
        v-show="isOpen"
        @click="emit('close')"
        class="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
    ></div>

    <!-- Sidebar -->
    <div
        class="fixed top-0 left-0 size-full max-w-80 z-50 transform transition-transform duration-300"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
        <div class="flex justify-between bg-gray-800 p-4">
            <div class="flex flex-col">
                <img
                    src="#"
                    alt="profile-photo"
                    class="bg-gray-500 rounded-full size-20"
                />
                <div class="mt-3 space-y-0.5">
                    <p
                        class="font-Exo2-SemiBold text-xs text-gray-200 capitalize"
                    >
                        Nick Name
                    </p>
                    <p class="font-Exo2-Light text-xs text-gray-400">
                        @Username
                    </p>
                </div>
            </div>
            <div class="flex">
                <button @click="emit('close')" class="text-white self-start">
                    <XMarkIcon class="size-6"></XMarkIcon>
                </button>
            </div>
        </div>
        <div
            class="flex flex-col justify-between bg-gray-900 h-[calc(100dvh-158px)] py-6 px-4"
        >
            <nav>
                <ul class="space-y-4">
                    <li class="flex items-center gap-x-4">
                        <UserCircleIcon
                            class="size-6 text-gray-400"
                        ></UserCircleIcon>
                        <p
                            class="text-gray-400 text-sm font-Exo2-Regular capitalize"
                        >
                            My Account
                        </p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <WalletIcon class="size-6 text-gray-400"></WalletIcon>
                        <p
                            class="text-gray-400 text-sm font-Exo2-Regular capitalize"
                        >
                            My Wallet
                        </p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <InformationCircleIcon
                            class="size-6 text-gray-400"
                        ></InformationCircleIcon>
                        <p
                            class="text-gray-400 text-sm font-Exo2-Regular capitalize"
                        >
                            About Platform
                        </p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <ArrowRightStartOnRectangleIcon
                            class="size-6 text-gray-400"
                        ></ArrowRightStartOnRectangleIcon>
                        <p
                            class="text-gray-400 text-sm font-Exo2-Regular capitalize"
                        >
                            Log out
                        </p>
                    </li>
                </ul>
            </nav>
            <p class="text-gray-500 font-Exo2-Light text-xs text-center">2024-01-01
                v1.0.0</p>
        </div>
    </div>
</template>
