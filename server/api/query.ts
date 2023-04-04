export default defineEventHandler((event) => {
    const query = getQuery(event)
    const cookie = parseCookies(event)
    return { a: query.a, b: query.b, cookie }
  })
  