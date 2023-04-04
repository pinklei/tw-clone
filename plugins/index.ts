export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp)
  nuxtApp.vueApp.directive('focus', {
    // 可以直接使用 v-focus 這個指令來控制元素聚焦的效果
    mounted(el) {
      el.focus()
    },
    getSSRProps() {
      // you can provide SSR-specific props here
      return {}
    }
  });
  // 传递给插件的唯一参数是 nuxtApp.
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`
    }
  }
})

