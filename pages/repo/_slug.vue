<template>
  <div>
    <div class="bg-gray-light text-dark py-8" ref="page">
      <div id="repo-header" class="container md:flex pb-8">
        <div>
          <h1 class="text-3xl md:text-4xl">{{ repo.name }}</h1>
          <div class="markdown" v-html="renderMD(repo.description)"></div>
          <div
            v-if="repo.languages.length > 0"
            class="languages h-16 flex justify-start items-center"
          >
            <p class="text-xl">{{ repo.stargazers }} <Icon name="star" /></p>
            <span class="mx-2">|</span>
            <Icon
              v-for="lang in repo.languages"
              :key="lang"
              :name="lang"
              :dev="true"
              class="text-2xl"
            ></Icon>
          </div>
        </div>
        <div
          :class="`mt-8 md:mt-0 ${
            (repo.url === null ||
              repo.url === '' ||
              typeof repo.url === 'undefined') &&
            'hidden'
          }`"
        >
          <Button icon="external-link" :link="repo.url"
            >Acessar repositório</Button
          >
        </div>
      </div>
      <Markdown
        id="repo-content-readme"
        :content="repo.read_me"
        class="container"
      ></Markdown>
    </div>
    <div class="bg-dark">
      <section id="repo-suggestions" class="container">
        <h5>Sugestões</h5>
        <div class="card-grid grid-suggestions">
          <div v-for="(item, index) in suggestions" :key="index">
            <RepositoryCard
              class="h-full"
              v-if="index % 2 === 0"
              :repo="item"
            ></RepositoryCard>
            <div
              class="flex justify-center flex-col md:col-start-3 items-center text-gray-light text-center px-4 h-full"
              v-else
            >
              <h6 class="text-2xl mb-8">Veja meus outros repositórios</h6>
              <Button
                link="https://github.com/devbaraus"
                :dev="true"
                class="text-xl border-1 border-gray-light hover:border-primary"
                icon="github"
              >
                Acessar GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Markdown from '@/components/Markdown'
import md from '@/utils/markdown'
import RepositoryCard from '@/components/Repo/RepositoryCard'
export default {
  scrollToTop: true,
  name: 'slug',
  components: { RepositoryCard, Markdown, Button, Icon },
  async asyncData({ route, $axios, app, store }) {
    // console.log(context)
    const repo = await (await $axios.get(`repos/${route.params.slug}`)).data

    let suggestions = await (
      await $axios.get('suggest/repos', {
        params: { repo: repo.name, suggestions: 2 },
      })
    ).data

    suggestions =
      suggestions.length === 2
        ? [suggestions[0], , suggestions[1]]
        : [suggestions[0], null]

    return { repo, suggestions }
  },
  methods: {
    renderMD(data) {
      return md.render(data)
    },
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
#repo-header {
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
