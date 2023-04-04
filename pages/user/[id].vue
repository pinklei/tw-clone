<script setup>
const route = useRoute();
console.log(route.params,route.query.name);
</script>

<template>
    <div>
        123= {{ $route.params }}
    </div>
</template>

<style lang='less' scoped>

</style>