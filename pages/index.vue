<script setup lang="ts"></script>

<template>
    <div class="flex flex-col items-center justify-around h-full px-6">
        <!--Logo and Text-->
        <div class="flex flex-col items-center space-y-2">
            <img src="~/assets/images/Logo.svg" alt="Logo" class="size-32" />
            <h1 class="font-bold text-white capitalize font-Exo2-SemiBold">
                platform name
            </h1>
            <p class="text-white text-center font-Exo2-Light text-sm">
                Lorem ipsum odor amet, consectetuer adipiscing
            </p>
        </div>
        <!--buttons-->
        <div class="w-full max-w-[300px] flex flex-col gap-y-3 px-5">
            <NuxtLink to="/register">
                <Button title="register"></Button>
            </NuxtLink>
            <NuxtLink to="/login">
                <Button title="login"></Button>
            </NuxtLink>
        </div>
    </div>
</template>
