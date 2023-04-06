<template>
    <div class="h-screen flex flex-col">
        <div class="p-2 my-2 hover:bg-blue-50 hover:rounded-full w-min dark:hover:bg-white/20" :class="defaultTransiton">
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <LogoTwitter />
                </div>
            </nuxt-link>
        </div>

        <div class="mt-2 space-y-3">
            <SiderbarLeftTab active>
                <template v-slot:icon>
                    <HomeIcon />
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SiderbarLeftTab>

            <SiderbarLeftTab>
                <template v-slot:icon>
                    <HashtagIcon />
                </template>
                <template v-slot:name>
                    Explore
                </template>
            </SiderbarLeftTab>


            <SiderbarLeftTab>
                <template v-slot:icon>
                    <BellIcon />
                </template>
                <template v-slot:name>
                    Notifications
                </template>
            </SiderbarLeftTab>


            <SiderbarLeftTab>
                <template v-slot:icon>
                    <InboxIcon />
                </template>
                <template v-slot:name>
                    Messages
                </template>
            </SiderbarLeftTab>

            <SiderbarLeftTab>
                <template v-slot:icon>
                    <BookmarkIcon />
                </template>
                <template v-slot:name>
                    Bookmarks
                </template>
            </SiderbarLeftTab>

            <SiderbarLeftTab>
                <template v-slot:icon>
                    <DocumentTextIcon />
                </template>
                <template v-slot:name>
                    Lists
                </template>
            </SiderbarLeftTab>


            <SiderbarLeftTab>
                <template v-slot:icon>
                    <UserIcon />
                </template>
                <template v-slot:name>
                    Profile
                </template>
            </SiderbarLeftTab>

            <SiderbarLeftTab>
                <template v-slot:icon>
                    <EllipsisHorizontalCircleIcon />
                </template>
                <template v-slot:name>
                    More
                </template>
            </SiderbarLeftTab>

        </div>
    </div>
</template>
<script setup>
import { HomeIcon } from '@heroicons/vue/24/solid'
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/outline"
const { defaultTransiton } = useTailwindConfig()

</script>