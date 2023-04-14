import { sendError } from "h3"
import { getUserByUsername } from '../../db/users'
import bcrypt from 'bcrypt'
import { generateTokens, sendRefreshToken } from '~~/server/utils/jwt'
import { userTransformer } from "~~/server/transformers/user.js"
import { createRefreshToken, getRefreshTokenByUserId, updateRefreshToken } from "~~/server/db/refreshToken"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { username, password } = body

    if (!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid params'
        }))
    }

    //check username
    const user = await getUserByUsername(username)
    if (!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'username or password is Invalid'
        }))
    }

    //compare password
    const doesThePasswordMatch = await bcrypt.compare(password, user.password)
    if (!doesThePasswordMatch) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    //token
    const { accessToken, refreshToken } = generateTokens(user)

    const data = await getRefreshTokenByUserId(user.id)
    if (data) {
        //update it inside db
        await updateRefreshToken({
            token: refreshToken,
            userId: user.id
        })
    } else {
        //save it inside db
        await createRefreshToken({
            token: refreshToken,
            userId: user.id
        })
    }

    //add http only cookie
    sendRefreshToken(event, refreshToken)

    return {
        access_token: accessToken,
        user: userTransformer(user)
    }

})