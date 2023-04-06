<template>
    <div class="m-2 overflow-hidden border bg-gray-50 rounded-2xl dark:bg-dim-700" :class="twitterBorderColor">
        <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white">{{ props.title }}</h1>

        <slot></slot>

        <div class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
            :class="defaultTransiton">
            show more
        </div>
    </div>
</template>
<script setup>
const { twitterBorderColor, defaultTransiton } = useTailwindConfig()

const props = defineProps({
    title: {
        type: String,
        require: true
    }
})
</script>