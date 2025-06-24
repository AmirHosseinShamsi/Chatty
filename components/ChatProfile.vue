<script setup lang="ts">
const props = defineProps({});
</script>

<template>
    <div class="p-3 flex justify-between space-x-3 h-16 bg-gray-900">
        <div class="flex space-x-4 items-center">
            <img
                src="~/assets/images/profile-photo.jpg"
                alt="profile-photo"
                class="size-10 rounded-full object-cover"
            />
            <div class="space-y-2">
                <h1 class="font-Exo2-SemiBold text-xs text-gray-200">my friend</h1>
                <p class="font-Exo2-Regular text-xs text-gray-500">hello i'm test friend</p>
            </div>
        </div>
        <div class="space-y-2 flex flex-col items-center">
            <p class="font-Exo2-Regular text-xs text-white">22:00</p>
            <Badge value="5"></Badge>
        </div>
    </div>
</template>

<style scoped></style>
