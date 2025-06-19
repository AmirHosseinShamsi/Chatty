import { setCookie } from 'h3'

export default defineEventHandler(async (event) => {
    // Clear the token by setting it to empty with short expiry
    setCookie(event, 'token', '', {
        httpOnly: false,
        secure: false,
        sameSite: 'strict',
        path: '/',
        maxAge: 0,
    })

    return { message: 'Logged out' }
})
