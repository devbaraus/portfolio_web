<template>
  <div>
    <div class="bg-gray-light text-dark py-8" ref="page">
      <div id="repo-header" class="container md:flex pb-8">
        <div>
          <h1 class="text-3xl md:text-4xl">{{ repo.name }}</h1>
          <p>
            {{ repo.description }}
          </p>
          <div
            v-if="repo.languages.length > 0"
            class="languages h-16 flex justify-start items-center"
          >
            <Icon
              v-for="lang in repo.languages"
              :key="lang"
              :name="lang"
              :dev="true"
              class="text-2xl"
            ></Icon>
          </div>
        </div>
        <div class="mt-8 md:mt-0">
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
          <RepositoryCard :repo="suggestions[0]"></RepositoryCard>
          <div
            class="flex justify-center flex-col items-center text-gray-light text-center"
          >
            <h6 class="text-3xl mb-8">Veja meus outros repositórios</h6>
            <Button
              link="https://dev.to/user/devbaraus"
              :dev="true"
              class="text-2xl border-1 border-gray-light hover:border-primary"
              icon="github"
            >
              Acessar GitHub
            </Button>
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
import RepositoryCard from '@/components/Repo/RepositoryCard'
export default {
  scrollToTop: true,
  name: 'slug',
  components: { RepositoryCard, Markdown, Button, Icon },
  async asyncData({ route, $axios, app, store }) {
    // console.log(context)
    const repo = (await $axios.get(`repos/${route.params.slug}`)).data

    app.head.title = `${repo.name} | DevBaraus`
    app.head.description = `Repositório ${repo.name} no GitHub.`
    const suggestions = await (await $axios.get('repos')).data.filter(
      (item) => item.name !== repo.name,
    )

    return { repo, suggestions }
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
