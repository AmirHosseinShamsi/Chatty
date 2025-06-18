<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid';
import {
    UserCircleIcon,
    WalletIcon,
    InformationCircleIcon,
    ArrowRightStartOnRectangleIcon,
} from '@heroicons/vue/24/outline';
import type { FunctionalComponent } from 'vue';
//props
const { isOpen } = defineProps<{
    isOpen: boolean;
}>();

//emit
const emit = defineEmits(['close']);

//data
interface SidebarItems {
    icon: FunctionalComponent;
    text: string;
}

const sidebarItems: SidebarItems[] = [
    { icon: UserCircleIcon, text: 'My Account' },
    { icon: WalletIcon, text: 'My Wallet' },
    { icon: InformationCircleIcon, text: 'About Platform' },
    { icon: ArrowRightStartOnRectangleIcon, text: 'Log out' },
];

const isProfilePhoto = ref<boolean>(true);
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
                <NuxtLink to="/dashboard/profile">
                    <div class="size-20 rounded-full" v-if="isProfilePhoto">
                        <img
                            src="~/assets/images/profile-photo.jpg"
                            alt="profile-photo"
                            class="object-cover size-full rounded-full"
                        />
                    </div>
                    <div class="bg-gray-600 rounded-full size-20 flex justify-center items-center" v-else>
                        <img
                            src="~/assets/images/ProfilePreview.svg"
                            class="size-10"
                            alt="profile-photo"
                        />
                    </div>
                </NuxtLink>
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
                <ul class="flex flex-col gap-y-3">
                    <li
                        class="flex items-center gap-x-4"
                        v-for="(item, index) in sidebarItems"
                        :key="index"
                    >
                        <component
                            :is="item.icon"
                            class="size-6 text-gray-400"
                        />
                        <p
                            class="text-gray-400 text-sm font-Exo2-Regular capitalize"
                        >
                            {{ item.text }}
                        </p>
                    </li>
                </ul>
            </nav>
            <p class="text-gray-500 font-Exo2-Light text-xs text-center">
                2024-01-01 v1.0.0
            </p>
        </div>
    </div>
</template>
