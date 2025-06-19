import { readBody } from 'h3';
import { readUsers } from '../../utils/users';

export default defineEventHandler(async (event) => {
    interface UserInfo {
        id: number;
        email: string;
        password: string;
    }

    const { email, password } = await readBody(event);
    const users: UserInfo[] = await readUsers();

    const user: UserInfo | undefined = users.find(
        (u) => u.email === email && u.password === password
    );
    if (!user) return { error: 'Invalid credentials' };

    const token: string = Math.random().toString(36).substring(2);
    const userId: number = user.id;

    setCookie(event, 'token', token, {
        httpOnly: false,
        secure: false,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
    })

    return { email, token, id: userId };
});
