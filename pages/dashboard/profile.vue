<script setup lang="ts">
import { ArrowLeftIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/solid';
import {ShieldCheckIcon , LockClosedIcon} from '@heroicons/vue/24/outline';

const isProfilePhoto = ref<boolean>(true);
const router = useRouter();
</script>

<template>
    <div>
        <div class="h-72 bg-gray-950 flex justify-center items-center relative">
            <div class="absolute top-0 left-0 flex justify-between w-full">
                <button @click="router.back()">
                    <ArrowLeftIcon class="size-6 text-white mt-4 ml-4" />
                </button>
                <EllipsisVerticalIcon class="size-6 text-white mt-4 mr-4" />
            </div>
            <div class="size-full" v-if="isProfilePhoto">
                <img
                    src="~/assets/images/profile-photo.jpg"
                    alt="profile-photo"
                    class="object-cover size-full"
                />
            </div>
            <img
                src="~/assets/images/ProfilePreview.svg"
                class="size-28"
                alt="profile-photo"
                v-else
            />
            <div class="absolute bottom-4 left-4 capitalize">
                <p class="text-gray-300 text-sm">nickname</p>
                <p class="text-gray-500 text-xs">Online</p>
            </div>
            
            <div class="size-10 rounded-full bg-gray-800 absolute right-5 -bottom-5 flex justify-center items-center">
                <img src="~/assets/images/ChangePicture.svg" alt="change-picture" class="size-5"/>
            </div>
        </div>
        <div class="h-[calc(100dvh-288px)] bg-gray-900 px-4 pt-5">
            <div class="space-y-5">
                <div class="space-y-4">
                    <h1 class="text-sm capitalize text-green-500">account</h1>
                    <div class="space-y-1">
                        <h1 class="text-sm font-Exo2-SemiBold text-gray-300">Nickname here</h1>
                        <p class="text-xs font-Exo2-Light text-gray-500">Tap to change nickname</p>
                    </div>
                    <div class="space-y-1">
                        <h1 class="text-sm font-Exo2-SemiBold text-gray-300">@username_here</h1>
                        <p class="text-xs font-Exo2-Light text-gray-500">Tap to change username</p>
                    </div>
                    <div class="space-y-1">
                        <h1 class="text-sm font-Exo2-SemiBold text-gray-300">Balance 0.000000BTC ~= 0.00USD</h1>
                        <p class="text-xs font-Exo2-Light text-gray-500">Tap to see more detail</p>
                    </div>
                </div>
                <div class="space-y-4">
                    <h1 class="text-sm capitalize text-green-500">security</h1>
                    <div class="flex items-center space-x-2">
                        <ShieldCheckIcon class="size-6 text-gray-500"/>
                        <p class="font-Exo2-SemiBold text-xs text-gray-300 first-letter:capitalize">Account recovery seeds </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <LockClosedIcon class="size-6 text-gray-500"/>
                        <p class="font-Exo2-SemiBold text-xs text-gray-300 first-letter:capitalize">Account cloud password </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
