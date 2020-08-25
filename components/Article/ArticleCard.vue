<template>
  <article class="article">
    <div class="article-header">
      <Link :to="`/article/${article.id}`">
        <img
          :data-src="article.cover"
          :alt="`${article.title} Cover`"
          class="article-img cursor-pointer hover:opacity-75 transition-all duration-200 ease-in lazyload"
        />
      </Link>
      <Link
        :to="`/article/${article.id}`"
        class="article-header-content cursor-pointer hover:opacity-75 transition-all duration-200 ease-in"
      >
        <p>
          {{ article.title }}
        </p>
      </Link>
    </div>
    <div class="article-body">
      {{ article.description }}
    </div>
    <div class="article-footer" v-if="article.tags.length > 0">
      <Icon
        v-for="label in article.tags"
        :key="label"
        :dev="true"
        :name="label"
        class="article-badge"
      />
    </div>
  </article>
</template>

<script>
import Link from '@/components/Link'
import Icon from '@/components/Icon'
export default {
  name: 'ArticleCard',
  components: { Icon, Link },
  props: {
    article: Object,
  },
}
</script>

<style lang="scss" scoped>
.article {
  @apply bg-light text-white shadow-lg relative;
  > div {
    @apply p-4;
  }

  .article-header {
    @apply relative  p-0;

    .article-header-content {
      @apply w-full flex justify-between p-4 bg-primary;
      bottom: 0;
    }

    .article-img {
      @apply w-full h-48 object-cover;
    }

    span {
      @apply text-sm;
      color: #e6e6f0;
    }
    i {
      @apply text-xl cursor-pointer;
    }
  }
  .article-footer {
    @apply flex h-16 items-center;

    i {
      @apply text-xl mr-2;
    }
  }
}
</style>
