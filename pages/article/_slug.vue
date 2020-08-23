<!--suppress ALL -->
<template>
  <div class="bg-gray-light text-dark">
    <div class="pb-8" ref="page">
      <div id="article-banner" class="bg-dark h-64">
        <div class="container-fluid flex items-center h-full">
          <img
            :src="article.cover"
            alt="Banner artigo"
            class="object-cover h-full w-full image-open-modal"
          />
        </div>
      </div>
      <div id="article-header" class="container lg:flex pt-4 pb-8">
        <div>
          <h1 class="text-3xl lg:text-4xl">{{ article.title }}</h1>
          <div>
            <span
              class="article-reactions"
              :title="`${article.reactions} pessoas reagiram a este post`"
            >
              <Icon name="heart"></Icon> {{ article.reactions }}
            </span>
            |
            <span class="artile-minread">
              <Icon name="book-open"></Icon>
              {{
                Math.ceil(
                  article.content.replace('\n', '').split(' ').length / 240,
                )
              }}
              min</span
            >
          </div>
          <div
            v-if="article.tags.length > 0"
            class="languages h-16 flex justify-start items-center"
          >
            <Icon
              v-for="tag in article.tags"
              :key="tag"
              :name="tag"
              :dev="true"
              class="text-2xl"
            ></Icon>
          </div>
        </div>
        <div :class="`mt-8 lg:mt-0 ${
            (article.url === null || article.url === '' || typeof article.url === 'undefined') && 'hidden'
          }`">
          <Button icon="devto" :dev="true" :link="article.url"
            >Acessar artigo</Button
          >
        </div>
      </div>
      <markdown
        id="article-content-readme"
        :content="article.content"
        class="container"
      ></markdown>
    </div>
    <div class="bg-dark">
      <section id="article-suggestions" class="container">
        <h5>Sugestões</h5>
        <div class="card-grid grid-suggestions">
          <div v-for="(item, index) in suggestions" :key="index">
            <ArticleCard class="h-full" v-if="index % 2 === 0" :article="item"></ArticleCard>
            <div
              v-else
              class="flex justify-center flex-col items-center text-gray-light text-center px-4 h-full"
            >
              <h6 class="text-2xl mb-8">Veja mais posts escritos por mim!</h6>
              <Button
                link="https://dev.to/devbaraus"
                :dev="true"
                class="text-xl border-1 border-gray-light hover:border-primary"
                icon="devto"
              >
                Acessar DEV
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Link from '@/components/Link'
import ArticleCard from '@/components/Article/ArticleCard'
export default {
  name: 'slug',
  components: { ArticleCard, Link, Markdown, Button, Icon },
  async asyncData({ route, $axios, app, store }) {
    // console.log(route.params.slug)
    const article = await (await $axios.get(`articles/${route.params.slug}`))
      .data

    let suggestions = await (
      await $axios.get('suggest/articles', {
        params: { id: article.id, suggestions: 2 },
      })
    ).data

    suggestions =
      suggestions.length === 2
        ? [suggestions[0], ,suggestions[1]]
        : [suggestions[0], null]


    return { article, suggestions }
  },
  mounted() {
    this.$refs.page.querySelectorAll('.image-open-modal').forEach((el) => {
      el.addEventListener('click', () => {
        this.$store.commit('imageModal', {
          name: el.getAttribute('alt'),
          url: el.getAttribute('src'),
        })
      })
    })
  },
}
</script>

<style lang="scss" scoped>
#article-header {
  @apply justify-between items-baseline;
  h1 {
    @apply font-bold;
  }
}

section {
  @apply py-6;
  border-top: 1px solid var(--color-light);

  h5 {
    @apply font-ubuntu text-3xl leading-loose relative text-primary;
    &::before {
      content: '';
      height: 1px;
      width: 4rem;
      position: absolute;
      left: 0;
      bottom: 0;
      border-bottom: 2px solid var(--color-primary);
    }
  }
}
</style>
