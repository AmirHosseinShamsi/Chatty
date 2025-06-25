import type { CookieRef } from '#app';

export default defineNuxtRouteMiddleware(async () => {
    const token: CookieRef<string | null | undefined> = useCookie('token', {
        httpOnly: false,
    });
    const tokenUserId: string | null | undefined = token.value;
    if (!tokenUserId) {
        return navigateTo('/login');
    }
});
