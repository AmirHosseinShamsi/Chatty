import { join } from 'path';
import { readFile, writeFile } from 'fs/promises';

const USERS_FILE = join(process.cwd(), 'data/users.json');

export async function readUsers() {
    const data = await readFile(USERS_FILE, 'utf-8');
    return JSON.parse(data) as {
        id: number;
        fullName: string;
        username: string;
        password: string;
    }[];
}

export async function writeUsers(
    users: {
        id: number;
        fullName: string;
        username: string;
        password: string;
    }[]
) {
    await writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
}
