<script setup lang="ts">
const props = defineProps<{
    chatTitle: string;
    chatText: string;
    chatTime: string;
    unreadMessages: string;
}>();
</script>

<template>
    <div class="p-3 flex justify-between space-x-3 h-16 bg-gray-900 border-b border-b-gray-800">
        <div class="flex space-x-4 items-center">
            <img
                src="~/assets/images/profile-photo.jpg"
                alt="profile-photo"
                class="size-10 rounded-full object-cover"
            />
            <div class="space-y-2">
                <h1 class="font-Exo2-SemiBold text-xs text-gray-200">
                    {{props.chatTitle}}
                </h1>
                <p class="font-Exo2-Regular text-xs text-gray-500">
                    {{props.chatText}}
                </p>
            </div>
        </div>
        <div class="space-y-2 flex flex-col items-center">
            <p class="font-Exo2-Regular text-xs text-white">{{props.chatTime}}</p>
            <Badge :value="props.unreadMessages"></Badge>
        </div>
    </div>
</template>

<style scoped></style>
