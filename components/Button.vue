<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="bg-dark px-4 py-2 rounded-none hover:rounded-lg text-gray-light"
  >
    <Icon :dev="dev" :name="icon" :class="`${!icon && 'hidden'}`" />
    <slot></slot>
  </a>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  name: 'Button',
  components: { Icon },
  props: {
    link: String,
    icon: {
      type: String,
      default: ''
    },
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
