<template>
  <div class="card-grid">
    <RepositoryCard v-for="repo in repos" :key="repo.id" :repo="repo" />
  </div>
</template>

<script>
import RepositoryCard from './RepositoryCard'

export default {
  name: 'RepositoryGrid',
  components: { RepositoryCard },
  props: {
    repos: Array,
  },
}
</script>

<style lang="scss" scoped>
</style>
