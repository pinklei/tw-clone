import { prisma } from './index'

export const createUser = (useData) => {
    return prisma.user.create({
        data: useData
    })
}