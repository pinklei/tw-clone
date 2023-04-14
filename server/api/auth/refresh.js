import { getRefreshTokenByToken } from "../../db/refreshToken.js"
import { decodeRefreshToken, generateTokens } from "../../utils/jwt.js"
import { getUserById } from "../../db/users.js"

export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)

    const refreshToken = cookie.refresh_token

    if (!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'refresh token is invalid'
        }))
    }

    const rToken = await getRefreshTokenByToken(refreshToken)

    if (!rToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }

    const token = decodeRefreshToken(refreshToken)

    try {
        const user = await getUserById(token.userId)

        const { accessToken } = generateTokens(user)

        return { access_token: accessToken }

    } catch (error) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Something went wrong'
        }))
    }
})