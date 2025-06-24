import { readBody } from 'h3';
import { readUsers } from '../../utils/users';

export default defineEventHandler(async (event) => {
    interface UserInfo {
        id: number;
        username: string;
        password: string;
    }

    const { username, password } = await readBody(event);
    const users: UserInfo[] = await readUsers();

    const user: UserInfo | undefined = users.find(
        (u) => u.username === username && u.password === password
    );
    if (!user)
        throw createError({
            status: 401,
            message: 'invalid credentials.',
        });

    const userId: number = user.id;

    setCookie(event, 'token', String(userId), {
        httpOnly: false,
        secure: false,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
    });

    return { id: user.id };
});
