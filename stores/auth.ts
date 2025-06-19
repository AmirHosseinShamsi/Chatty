import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    async function login(username: string, password: string) {
        const { id, error } = await $fetch<LoginResponse>('/api/auth/login', {
            method: 'POST',
            body: { username, password },
        });
        if (error) {
            return { error };
        }
        return navigateTo({
            name: 'dashboard-id',
            params: {
                id: id,
            },
        });
    }

    async function logout() {
        await $fetch('/api/auth/logout', { method: 'POST' });
        return navigateTo('/login');
    }

    return { login, logout };
});
