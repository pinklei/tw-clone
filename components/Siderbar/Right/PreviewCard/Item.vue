<template>
    <div class="p-3 border-b hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-350 dark:text-gray-300 dark:hover:text-dim-900"
        :class="wrapperClasses">
        <slot></slot>
    </div>
</template>
<script setup>
const { twitterBorderColor, defaultTransiton } = useTailwindConfig()
const wrapperClasses = computed(() => `${defaultTransiton} ${twitterBorderColor}`)
</script>