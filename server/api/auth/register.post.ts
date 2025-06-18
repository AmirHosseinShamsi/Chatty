import { readBody } from 'h3'
import { readUsers, writeUsers } from '../../utils/users'

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event)
    const users = await readUsers()

    if (users.find((u) => u.email === email)) {
        return { error: 'User already exists' }
    }

    users.push({ email, password })
    await writeUsers(users)

    const token = Math.random().toString(36).substring(2)
    return { user: { email }, token }
})
