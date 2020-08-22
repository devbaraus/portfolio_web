<template>
  <i
    :title="title && name"
    :class="`${
      dev
        ? `ds-${getName()}`
        : `icon-${getName()}`
    }`"
  ></i>
</template>

<script>
import { langToIcon } from '~/utils'

export default {
  name: 'Icon',
  props: {
    name: '',
    dev: {
      type: Boolean,
      default: false,
    },
    title: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    getName(){
      return langToIcon(this.name)
    }
  }
}
</script>

<style scoped>
 i + i {
   @apply ml-2;
 }
</style>
