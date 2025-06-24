import type { CookieRef } from '#app';

export default defineNuxtRouteMiddleware(async (to) => {
    const token: CookieRef<string | null | undefined> = useCookie('token', {
        httpOnly: false,
    });

    const routeUserId: string | string[] = to.params.id;
    const tokenUserId: string | null | undefined = token.value?.toString();
    if (!tokenUserId || tokenUserId !== routeUserId) {
        return navigateTo('/login');
    }
});
