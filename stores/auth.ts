export const useAuthStore = defineStore('auth', () => {
    async function login({
        username,
        password,
    }: {
        username: string;
        password: string;
    }) {
        try {
            await $fetch<{ id: number }>('/api/auth/login', {
                method: 'POST',
                body: { username, password },
            });
            return navigateTo({
                name: 'dashboard',
            });
        } catch (error: any) {
            return error?.data?.message || 'Something went wrong';
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
        try {
            await $fetch<{ id: number }>('/api/auth/register', {
                method: 'POST',
                body: { fullName, username, password },
            });
            return navigateTo({
                name: 'login',
            });
        } catch (error: any) {
            return error?.data?.message || 'Something went wrong';
        }
    }

    async function logout() {
        await $fetch('/api/auth/logout', { method: 'POST' });
        return navigateTo('/login');
    }

    return { login, logout, register };
});
