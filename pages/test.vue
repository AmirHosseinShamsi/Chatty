<script setup lang="ts">
// Active tab state
const activeTab = ref('all');

// Tab configuration
const tabs = [
    { id: 'all', label: 'All Chats' },
    { id: 'received', label: 'Received requests' },
    { id: 'sent', label: 'Sent requests' },
];
</script>

<template>
    <div class="w-full max-w-4xl mx-auto p-6">

        <!-- Tab Navigation -->
        <div class="mb-6">
            <nav class="flex space-x-8">
                <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="activeTab = tab.id"
                    :class="[
                        'bg-gray-900 rounded py-2 px-4 text-gray-500 text-xs transition-colors duration-200',
                        activeTab === tab.id
                            ? 'text-green-500'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    ]"
                >
                    {{ tab.label }}
                </button>
            </nav>
        </div>

        <!-- Tab Content -->
        <div class="min-h-[400px]">
            <!-- Dashboard Tab -->
            <div v-if="activeTab === 'all'" class="space-y-6">
                this is All chats
            </div>

            <!-- Users Tab -->
            <div v-if="activeTab === 'received'" class="space-y-4">
                this is received requests
            </div>

            <!-- Products Tab -->
            <div v-if="activeTab === 'sent'" class="space-y-6">
                this is sent requests
            </div>
        </div>
    </div>
</template>
