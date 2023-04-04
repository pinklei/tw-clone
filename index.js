const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
})

async function main() {
    // await prisma.user.create({
    //   data: {
    //     name: 'Alice',
    //     email: 'alice@prisma.io',
    //     posts: {
    //       create: { title: 'Hello World' },
    //     },
    //     profile: {
    //       create: { bio: 'I like turtles' },
    //     },
    //   },
    // })

    // const allUsers = await prisma.user.findMany({
    //   include: {
    //     posts: true,
    //     profile: true,
    //   },
    // })
    // console.dir(allUsers, { depth: null })
    const post = await prisma.user.findMany()
    console.log(post)
}
//日志记录
prisma.$on('query', (e) => {
    console.log('Query: ' + e.query)
    // console.log('Duration: ' + e.duration + 'ms')
})

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })