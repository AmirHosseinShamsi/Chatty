export default defineNuxtRouteMiddleware(async () => {
    const token = useCookie('token', { httpOnly: false });
    if (!token.value) {
        return navigateTo('/login');
    }
});
