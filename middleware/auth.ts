export default defineNuxtRouteMiddleware(async () => {
    const token = useCookie('token', { httpOnly: true });
    if (!token.value) {
        return navigateTo('/login');
    }
});
