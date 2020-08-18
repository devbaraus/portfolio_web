<template>
  <a :href="to" target="_top" @click="goTo"><slot></slot></a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    to: String,
  },
  methods: {
    goTo(e) {
      e.preventDefault()
      this.$router.push(this.to)
      this.$scrollTo('body', 0, { force: true })
    },
  },
}
</script>

<style scoped></style>
