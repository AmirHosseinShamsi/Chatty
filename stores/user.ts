import { computed } from 'vue';

interface User {
    id: number;
    name: string;
    email: string;
}

export const useUserStore = defineStore('user', () => {
    //refs are state
    const users = ref<User[]>([
        { id: 1, name: 'amirhossein', email: 'shamsiamir2000' },
        {
            id: 2,
            name: 'zahra',
            email: 'moghimi',
        },
        { id: 3, name: 'ali', email: 'hasani' },
    ]);

    //computed are getters
    const allUsers = computed(() => users.value);

    //functions are actions

    return { users, allUsers };
});
