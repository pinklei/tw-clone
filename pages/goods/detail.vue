<script setup>
const route = useRoute();

const config = useRuntimeConfig()
console.log('leicj-------------',config,config.public.apiBaseUrl, config.apiSecret);
const { data } = await useFetch('/api/goods/detail',{
    baseURL: config.public.apiBaseUrl,
    headers: {
      // Access a private variable (only available on the server)
      Authorization: `Bearer ${config.apiSecret}`
    },
    params: {id: route.query.id}
});
let foo = useFoo();
const changeFoo = () => {
    foo.value = 'leicj'
}
</script>

<template>
    <div>
        {{ data.id }}-{{ foo }}
    </div>
    <button @click="changeFoo">click</button>
</template>

<style lang='less' scoped>

</style>