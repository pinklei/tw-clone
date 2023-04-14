export default () => {
    const useAuthToken = () => useState('auth_token')
    const useAuthUser = () => useState('auth_user')
    const useAuthLoading = () => useState('auth_loading', () => true)

    const setToken = (newToken) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser()
        authUser.value = newUser
    }

    const setIsAuthLoading = (value) => {
        const authLoading = useAuthLoading()
        authLoading.value = value
    }

    const login = ({ username, password }) => {
        const config = useRuntimeConfig()
        return new Promise(async (resolve, reject) => {
            try {
                const { access_token, user } = await $fetch('/api/auth/login', {
                    method: 'POST',
                    body: {
                        username,
                        password
                    },
                    // baseURL: config.public.apiBaseUrl
                })
                setToken(access_token)
                setUser(user)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/refresh')
                setToken(data.access_token)
                setUser(data.user)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const getUserById = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await useFetchApi('/api/auth/user')
                setUser(data.user)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    //刷新页面
    const initAuth = () => {
        return new Promise(async (resolve, reject) => {
            setIsAuthLoading(true)
            try {
                await refreshToken()
                await getUserById()
                resolve(true)
            } catch (error) {
                reject(error)
            } finally {
                setIsAuthLoading(false)
            }
        })
    }

    //logout
    const logout = () => {
        return new Promise(async (resolve, reject) => {
            try {
                await $fetch('/api/auth/logout', {
                    method: 'POST'
                })
                setToken(null)
                setUser(null)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    return {
        login,
        useAuthUser,
        initAuth,
        useAuthToken,
        useAuthLoading,
        logout
    }
}