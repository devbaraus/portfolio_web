<template>
  <i
    :title="title && name"
    :class="`${
      dev
        ? `devicon-${getName()}-${wordmark ? 'wordmark' : ['express'].includes(getName()) ? 'original' : 'plain'}`
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
    wordmark: {
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

<style scoped></style>
