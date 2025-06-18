import { readBody } from 'h3'
import { readUsers, writeUsers } from '../../utils/users'

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event)
    const users = await readUsers()

    // Check if user already exists
    if (users.find((u) => u.email === email)) {
        return { error: 'User already exists' }
    }

    // Get the max ID from existing users, default to 0
    const lastId = users.reduce((max, user) => user.id > max ? user.id : max, 0)
    const newUser = {
        id: lastId + 1,
        email,
        password
    }

    users.push(newUser)
    await writeUsers(users)

    const token = Math.random().toString(36).substring(2)
    return { user: { id: newUser.id, email: newUser.email }, token }
})
