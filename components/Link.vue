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
    async goTo() {
      // e.preventDefault()

      (async () => {
        let goTo = this.to.match(/(\#\w*)/g)
        this.$scrollTo(goTo ? goTo[0] : 'body', 0, { force: true })
      })()

      this.$router.push(this.to)
    },
  },
}
</script>

<style scoped></style>
