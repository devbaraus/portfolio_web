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
.repo-grid {
  @apply grid mt-4 col-gap-4 row-gap-8;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
}
.repo {
  @apply bg-light text-gray-light shadow-lg flex justify-between flex-col;
  > div {
    @apply p-4;
  }
  .repo-header {
    @apply bg-primary  w-full flex justify-between;
    & > div > a {
      @apply text-xl font-bold cursor-pointer transition duration-200 ease-in;
      &:hover {
        @apply opacity-75;
      }
    }
    span {
      @apply text-sm;
      color: #e6e6f0;
    }
    i {
      @apply text-xl cursor-pointer;
    }
  }
  .repo-footer {
    @apply flex h-16 items-center;
    i {
      @apply text-xl mr-2;
    }
  }
}
</style>
