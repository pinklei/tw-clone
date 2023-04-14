import { prisma } from '.'

export const createRefreshToken = (refreshToken) => {
    return prisma.refreshToken.create({
        data: refreshToken
    })
}

export const updateRefreshToken = (refreshToken) => {
    return prisma.refreshToken.update({
        // data: refreshToken
        where: { userId: refreshToken.userId },
        data: {
            token: refreshToken.token
        }
    })
}


export const getRefreshTokenByToken = (token) => {
    return prisma.refreshToken.findUnique({
        where: {
            token
        }
    })
}

export const getRefreshTokenByUserId = (userId) => {
    return prisma.refreshToken.findUnique({
        where: {
            userId: userId
        }
    })
}

export const removeRefreshToken = (token) => {
    return prisma.refreshToken.delete({
        where: {
            token: token
        }
    })
}