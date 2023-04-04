export default defineEventHandler(async (event) => {
    const goodsList:any = [];
    for (let i = 0; i < 20; i++) {
        goodsList.push({ id: i })
    }
    return await new Promise((r) => {
        setTimeout(() => {
            r({goodsList})
        }, 2000)
    })
})
