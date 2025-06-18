import { readBody } from 'h3'
import { readUsers } from '../../utils/users'

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event)
    const users = await readUsers()

    const user = users.find((u) => u.email === email && u.password === password)
    if (!user) return { error: 'Invalid credentials' }

    const token = Math.random().toString(36).substring(2)
    return { user: { email }, token }
})
