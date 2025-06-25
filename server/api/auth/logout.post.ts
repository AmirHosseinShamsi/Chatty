import { setCookie } from 'h3';

export default defineEventHandler(
    async (event): Promise<{ message: string }> => {
        setCookie(event, 'token', '', {
            httpOnly: false,
            secure: false,
            sameSite: 'strict',
            path: '/',
            maxAge: 0,
        });

        return { message: 'Logged out' };
    }
);
