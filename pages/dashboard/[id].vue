<script setup lang="ts">
//interface

interface Chats {
    id: number;
    chatTitle: string;
    chatText: string;
    chatTime: string;
    unreadMessages: string;
    type: 'received' | 'sent';
}

//hooks
useHead({
    title: 'Dashboard',
});
definePageMeta({
    layout: 'dashboard',
    middleware: 'auth',
});

//states
const activeTab = ref<string>('all');

// data
const tabs: { id: string; label: string }[] = [
    { id: 'all', label: 'All Chats' },
    { id: 'received', label: 'Received requests' },
    { id: 'sent', label: 'Sent requests' },
];

const chats: Chats[] = [
    {
        id: 1,
        chatTitle: 'my test friend1',
        chatText: 'this is my test friend1',
        chatTime: '22:00',
        unreadMessages: '8',
        type: 'received',
    },
    {
        id: 2,
        chatTitle: 'my test friend2',
        chatText: 'this is my test friend2',
        chatTime: '22:00',
        unreadMessages: '2',
        type: 'received',
    },
    {
        id: 3,
        chatTitle: 'my test friend3',
        chatText: 'this is my test friend3',
        chatTime: '22:00',
        unreadMessages: '9',
        type: 'sent',
    },
    {
        id: 4,
        chatTitle: 'my test friend4',
        chatText: 'this is my test friend4',
        chatTime: '22:00',
        unreadMessages: '1',
        type: 'sent',
    },
    {
        id: 5,
        chatTitle: 'my test friend5',
        chatText: 'this is my test friend5',
        chatTime: '22:00',
        unreadMessages: '5',
        type: 'received',
    },
];

//functions
const filteredChats = computed(() => {
    if (activeTab.value === 'all') return chats;
    return chats.filter((chat) => chat.type === activeTab.value);
});
</script>

<template>
    <div class="w-full max-w-4xl mx-auto">
        <!-- Tab Navigation -->
        <div class="p-2">
            <nav class="flex space-x-2">
                <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    :aria-selected="activeTab === tab.id"
                    role="tab"
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
        <div class="min-h-[400px] *:text-white">
            <!-- Dashboard Tab -->
            <template v-if="filteredChats.length > 0">
                <ChatProfile
                    v-for="chat in filteredChats"
                    :key="`chat-${chat.id}`"
                    :chat-text="chat.chatText"
                    :chat-title="chat.chatTitle"
                    :chat-time="chat.chatTime"
                    :unread-messages="chat.unreadMessages"
                />
            </template>

            <!-- Empty state -->
            <div
                v-else
                class="flex items-center justify-center h-32 text-gray-500"
            >
                <p>No chats found for this category</p>
            </div>
        </div>
    </div>
</template>
