import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    async function login(username: string, password: string) {
        try {
            const { id } = await $fetch<{ id: number }>('/api/auth/login', {
                method: 'POST',
                body: { username, password },
            });
            return navigateTo({
                name: 'dashboard-id',
                params: {
                    id: id,
                },
            });
        } catch (error: any) {
            const message = error?.data?.message || 'Something went wrong';
            console.log(message);
            return message;
        }
    }

    async function register({
        fullName,
        username,
        password,
    }: {
        fullName: string;
        username: string;
        password: string;
    }) {
        const { id } = await $fetch<{ id: number }>('/api/auth/register', {
            method: 'POST',
            body: { fullName, username, password },
        });
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

    return { login, logout, register };
});
