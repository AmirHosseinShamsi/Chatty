<script setup lang="ts">
useHead({
    title: 'Dashboard',
});
definePageMeta({
    layout: 'dashboard',
    middleware: 'auth',
});

const route = useRoute()
</script>

<template>
    <div>
        <h1 class="text-white">{{route.params.id}}</h1>
    </div>
</template>
