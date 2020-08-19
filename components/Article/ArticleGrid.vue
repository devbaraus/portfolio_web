<template>
  <div class="card-grid">
    <ArticleCard
      v-for="article in articles"
      :article="article"
      :key="article.id"
    />
  </div>
</template>

<script>
import ArticleCard from './ArticleCard'

export default {
  name: 'PortfolioGrid',
  components: { ArticleCard },
  props: {
    articles: Array,
  },
}
</script>

<style lang="scss" scoped>
.article-grid {
  @apply grid mt-4 col-gap-4 row-gap-8;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
}
</style>
