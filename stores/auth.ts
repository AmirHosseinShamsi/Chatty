import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | null>(null);

    const isAuthenticated = computed(() => token.value);

    async function login(email: string, password: string) {
        interface Response {
            id: number;
            email: string;
            token: string;
            error: string;
        }
        const res = await $fetch<Response>('/api/auth/login', {
            method: 'POST',
            body: { email, password },
        });
        token.value = res.token;
        return res;
    }

    return { isAuthenticated, login };
});
