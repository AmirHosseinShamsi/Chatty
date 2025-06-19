export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'token');

    if (!token) {
        throw new Error('not authenticated');
    }

    // Here you could add additional token validation if needed
    // For now, we'll assume any existing token is valid
    return { authenticated: true };
});