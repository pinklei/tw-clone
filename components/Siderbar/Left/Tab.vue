<template >
    <nuxt-link to=""
        class="flex items-center p-3 w-min hover:bg-gray-200 rounded-full dark:hover:bg-dim-200 dark:text-white"
        :class="defaultTransiton">
        <div class="w-6 h-6 text-dark">
            <slot name="icon"></slot>
        </div>
        <div class="hidden ml-4 text-xl xl:block" :class="textclassed">
            <slot name="name"></slot>
        </div>
    </nuxt-link>
</template>
<script setup>
const { defaultTransiton } = useTailwindConfig()

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})

const textclassed = computed(() => props.active ? 'font-semibold' : 'font-normal')
</script>