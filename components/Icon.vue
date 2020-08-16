<template>
  <i :class="`${dev ? `devicon-${name}-${['express'].includes(name) ? 'original' : 'plain'}` : `icon-${name}`}`"></i>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      name: '',
      dev: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>
