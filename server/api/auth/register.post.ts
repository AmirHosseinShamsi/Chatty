import { readBody } from 'h3';
import { readUsers, writeUsers } from '../../utils/users';

export default defineEventHandler(async (event) => {
    const { fullName, username, password } = await readBody(event);
    const users = await readUsers();

    // Check if user already exists
    if (users.find((u) => u.username === username)) {
        throw createError({
            status: 401,
            message: 'user already exists',
        });
    }

    // Get the max ID from existing users, default to 0
    const lastId = users.reduce(
        (max, user) => (user.id > max ? user.id : max),
        0
    );
    const newUser = {
        id: lastId + 1,
        fullName,
        username,
        password,
    };

    users.push(newUser);
    await writeUsers(users);

    // const token = Math.random().toString(36).substring(2);
    setCookie(event, 'token', String(newUser.id), {
        httpOnly: false,
        secure: false,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
    });
    return { id: newUser.id };
});
