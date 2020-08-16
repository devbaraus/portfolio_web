<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="bg-dark px-4 py-2 rounded-lg text-white"
  >
    <Icon :dev="dev" :name="icon" class="text-base" />
    <slot></slot>
    <!--    <span v-if="!dev">-->
    <!--      <i :class="`icon-${icon} text-base`" /> -->
    <!--    </span>-->
    <!--    <span v-else>-->
    <!--      <i :class="`devicon-${icon}-plain text-xl`" /> {{ text }}-->
    <!--    </span>-->
  </a>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  name: 'Button',
  components: { Icon },
  props: {
    link: String,
    icon: String,
    dev: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  @apply mr-2 mb-2 transition-all ease-in duration-200 cursor-pointer;
  span {
    @apply flex items-center;
    i {
      @apply mr-1;
    }
  }
  &:hover {
    @apply text-primary;
  }
}
</style>
