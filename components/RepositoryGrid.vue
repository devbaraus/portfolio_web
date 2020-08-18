<template>
  <div class="repo-grid">
    <article v-for="repo in repos" class="repo">
      <div class="repo-header">
        <div>
          <Link :to="`/repo/${repo.name}`" tag="a">{{repo.name}}</Link>
        </div>
        <div class="flex items-center justify-between">
          <a :href="repo.html_url" rel="noopener noreferrer" target="_blank"><i class="icon-external-link"></i></a>
        </div>
      </div>
      <div class="repo-body">
        {{repo.description}}
      </div>
      <div class="repo-footer" v-if="repo.languages.length > 0">
        <icon v-for="lang in repo.languages" :key="lang" :dev="true" :name="lang" class="repo-badge"/>
      </div>
    </article>
  </div>
</template>

<script>
import { langToIcon } from '~/utils'

export default {
  name: 'RepositoryGrid',
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
