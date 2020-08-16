<template>
  <div class="bg-gray-light text-dark py-8">
    <div id="repo-header" class="container md:flex">
      <div>
        <h1>{{ repo.name }}</h1>
        <p>
          {{ repo.description }}
        </p>
        <div class="languages h-16 flex justify-start gap-4 items-center">
          <Icon
            v-for="lang in repo.languages"
            :key="lang"
            :name="lang"
            :dev="true"
            class="text-2xl"
          ></Icon>
        </div>
      </div>
      <Button icon="external-link" :link="repo.url">Acessar repositório</Button>
    </div>
    <div
      id="repo-content-readme"
      v-html="mdRender(repo.read_me)"
      class="markdown container"
    ></div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import markdown from '@/utils/markdown'
import Button from '@/components/Button'
export default {
  name: 'slug',
  components: { Button, Icon },
  async asyncData({ route, $axios }) {
    // console.log(context)
    const repo = (await $axios.get(`repos/${route.params.slug}`)).data
    return { repo }
  },
  methods: {
    mdRender(string) {
      return markdown.render(string)
    },
  },
}
</script>

<style lang="scss" scoped>
#repo-header {
  @apply  justify-between items-baseline;
  h1 {
    @apply text-4xl font-bold;
  }
}
</style>
