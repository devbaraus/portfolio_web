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
      let goTo = this.to.match(/(\#\w*)/g)
      this.$scrollTo( goTo.length > 0 ? goTo[0] : 'body', 0, { force: true })
    },
  },
}
</script>

<style scoped></style>
