<template>
    <div class="pt-5 space-y-6 w-full">
        <UIInput v-model="data.username" label="username" placeholder="username"></UIInput>
        <UIInput v-model="data.password" label="password" placeholder="password" type="password"></UIInput>

        <UIButton @click="handleLogin" liquid :disabled="isButtonDisabled">
            Login
        </UIButton>
    </div>
</template>

<script setup>
const data = reactive({
    username: '',
    password: '',
    loading: false
})

const handleLogin = async () => {
    const { login } = useAuth()
    data.loading = true
    try {
        await login({
            username: data.username,
            password: data.password
        })
    } catch (error) {
        console.log('leicj-------------error', error);
    } finally {
        data.loading = false
    }
}

const isButtonDisabled = computed(() => {
    return (!data.username || !data.password) || data.loading
})

</script>