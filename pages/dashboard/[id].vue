<script setup lang="ts">
useHead({
    title: 'Dashboard',
});
definePageMeta({
    layout: 'dashboard',
    middleware: 'auth',
});
</script>

<template>
    <div>
        <h1 class="text-white">this is dashboard page</h1>
    </div>
</template>
