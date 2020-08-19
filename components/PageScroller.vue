<template>
  <div style="bottom: 6rem; right: 2rem;" class="fixed hidden lg:block">
    <div
      class="h-full bg-dark text-gray-light flex items-center justify-center flex-col py-1 px-2"
    >
      <span @click="scrollUp"> <Icon name="chevron-up" /> </span>
      <span @click="scrollDown"> <Icon name="chevron-down" /> </span>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'PageScroller',
  components: { Icon },
  methods: {
    scrollDown() {
      this.$scrollTo('footer', 0, { force: true })
    },
    scrollUp() {
      this.$scrollTo('body', 0, { force: true })
    },
  },
}
</script>

<style scoped>
i {
  @apply cursor-pointer p-2;
}
</style>
