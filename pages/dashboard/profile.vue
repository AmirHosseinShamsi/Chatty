<script setup lang="ts">
import {ArrowLeftIcon , EllipsisVerticalIcon} from '@heroicons/vue/24/solid';

const isProfilePhoto = ref<boolean>(false);
</script>

<template>
<div>
    <div class="h-72 bg-gray-950 flex justify-center items-center relative">
        <div class="absolute top-0 left-0 flex justify-between w-full">
            <ArrowLeftIcon class="size-6 text-white"/>
            <EllipsisVerticalIcon class="size-4 text-white"/>
        </div>
        <img src="#" alt="profile-photo" v-if="isProfilePhoto"/>
        <img src="~/assets/images/ProfilePreview.svg" class="size-28" alt="profile-photo" v-else>
        <div class="absolute bottom-0 left-0">
            <p class="text-white">nickname</p>
            <p class="text-white">username</p>
        </div>
    </div>
    <div class="h-[calc(100dvh-288px)] bg-gray-900">
    </div>
</div>
</template>
