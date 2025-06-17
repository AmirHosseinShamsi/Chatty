<script setup lang="ts">
useHead({
    title: 'Seed',
});
definePageMeta({
    layout: 'auth',
    title: 'Register/Seed',
});

const seedItems = Array.from({ length: 12 });
</script>

<template>
    <div
        class="px-8 py-10 *:w-full flex flex-col items-center justify-between h-[calc(100vh-80px)]"
    >
        <div class="space-y-4">
            <div class="rounded-lg bg-gray-900 p-2">
                <p class="font-Exo2-Regular text-gray-300 text-xs text-justify">
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Pharetra porta neque primis vulputate netus auctor volutpat
                    dignissim. Massa fames aliquam morbi mattis velit arcu.
                    Elementum est mollis elementum velit, neque interdum sed.
                    Quam egestas
                </p>
            </div>
            <h1 class="text-xs text-gray-300 capitalize">your seeds</h1>
            <div class="grid grid-cols-3 gap-3">
                <div
                    class="rounded-lg bg-gray-900 text-center py-2 px-4"
                    v-for="(_, index) in seedItems"
                    :key="index"
                >
                    <p class="text-xs text-gray-300">test {{ index + 1 }}</p>
                </div>
            </div>
            <div class="w-full max-w-32 mx-auto">
                <Button title="regenerate seeds"></Button>
            </div>
        </div>
        <!--custom checkbox and button-->
        <div class="space-y-3">
            <div class="flex items-center gap-x-2 cursor-pointer relative">
                <input
                    type="checkbox"
                    checked
                    class="peer size-5 cursor-pointer transition-all appearance-none rounded bg-gray-800"
                    id="check"
                />
                <label
                    for="agree"
                    class="first-letter:capitalize text-xs text-gray-300 font-Exo2-Regular"
                    >I wrote down my seeds to safe place.</label
                >
                <span
                    class="absolute text-green-400 opacity-0 peer-checked:opacity-100 top-1/2 left-2.5 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                >
                    <img
                        src="~/assets/images/CheckIcon.svg"
                        class="size-3.5"
                        alt="check-icon"
                    />
                </span>
            </div>
            <Button title="continue"></Button>
        </div>
    </div>
</template>

<style scoped></style>
