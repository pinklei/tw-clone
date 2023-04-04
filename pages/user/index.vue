<script setup>
const goto = () => {
    // const router = useRouter()
    // router.push('/user/4')
    navigateTo({
        path: '/user/4',
        query: {
            page: 1,
            sort: 'asc'
        }
    })
};
useHead({
    title: 'leicj'
});
definePageMeta({
    layout: "custom",
    middleware: ['auth']
});
const { $hello } = useNuxtApp()
</script>

<template>
    <div>
        default
        {{ $hello('world') }}
        <input type="text" v-focus/>
        <ul>
            <li v-for="id in [1, 2, 3]">
                <NuxtLink :to="{ path: `/user/${id}`, query: { name: 111 } }">user-{{ id }}</NuxtLink>
            </li>
        </ul>
        <button @click="goto">link</button>
        <img src="/favicon.ico" alt="hot" />
        <img src="~/assets/img/hot.jpg" alt="hot" />
    </div>
</template>

<style lang='less' scoped></style>