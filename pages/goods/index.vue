<script setup>
const {data} = await useFetch('/api/goods')
console.log('leicj-------------',data);

</script>

<template>
    <ul>
        <li v-for="goods in data.goodsList">
            {{ goods }}
        </li>
    </ul>
</template>

<style lang='less' scoped>

</style>