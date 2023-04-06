<template>
    <div class="flex flex-col">
        <!-- preview card: what's happening-->
        <SiderbarRightPreviewCard title="What's happening">
            <SiderbarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
                <div>
                    <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatsHappening.title }}</h2>
                    <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
                </div>
            </SiderbarRightPreviewCardItem>
        </SiderbarRightPreviewCard>

        <!-- preview card: who to follow -->
        <SiderbarRightPreviewCard title="Who to follow">
            <SiderbarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row items-center justify-between p-2">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">

                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
                            <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <button
                            class="px-4 py-2 text-xs font-bold text-white bg-black rounded-full dark:text-black dark:bg-white">Follow</button>
                    </div>
                </div>
            </SiderbarRightPreviewCardItem>
        </SiderbarRightPreviewCard>

    </div>
</template>
<script setup>
const whatsHappeningItems = ref([
    {
        title: 'SpaceX',
        count: '18.8k'
    },
    {
        title: 'SpaceY',
        count: '1k'
    },
    {
        title: 'SpaceZ',
        count: '18k'
    },
    {
        title: 'SpaceN',
        count: '1.8k'
    }
])

const whoToFollowItems = ref([
    {
        name: 'Joe Biden',
        handle: '@JoeBiden',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'Joe Biden',
        handle: '@JoeBiden',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'Joe Biden',
        handle: '@JoeBiden',
        image: 'https://picsum.photos/200/200'
    }
])
</script>