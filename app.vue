<template>
  <!-- <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout> -->

  <buttonn class="bg-gray-300 p-3 rounded-full cursor-pointer" @click="changeDarkMode">切换</buttonn>
  <div :class="{ 'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px--6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- left sidebar -->
          <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SiderbarLeft />
            </div>
          </div>

          <!-- mian content -->
          <main class="col-span-12 bg-red-500 md:col-span-8 xl:col-span-6">
            <RouterView />
          </main>

          <!-- right siderbar -->
          <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-2">
            <div class="sticky top-0">
              <SiderbarRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(false)
const changeDarkMode = () => {
  darkMode.value = !darkMode.value
}


const layout = ref("default");
setTimeout(() => {
  layout.value = "custom"
}, 1000)
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
