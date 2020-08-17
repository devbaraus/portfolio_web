<template>
  <div class="bg-gray-light text-dark py-8">
    <div id="repo-header" class="container md:flex pb-8">
      <div>
        <h1 class="text-3xl md:text-4xl">{{ repo.name }}</h1>
        <p>
          {{ repo.description }}
        </p>
        <div
          v-if="repo.languages.length > 0"
          class="languages h-16 flex justify-start gap-4 items-center"
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
scrollToTop: true, 
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
  @apply justify-between items-baseline;
  h1 {
    @apply font-bold;
  }
}
</style>
