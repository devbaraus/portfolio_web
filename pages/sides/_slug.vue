<template>
  <div class="bg-gray-light text-dark">
    <div id="side-banner" class="bg-dark h-48">
      <div class="container flex items-center h-full">
        <img :src="side.cover" :alt="`${side.name} logotipo`" class="container object-contain h-32" v-lazy-load/>
      </div>
    </div>
    <div id="side-header" class="container md:flex pt-4 pb-8">
      <div>
        <h1 class="text-3xl md:text-4xl">{{ side.name }}</h1>
      </div>
      <div class="mt-8 md:mt-0">
        <Button icon="external-link" :link="side.url">Acessar projeto</Button>
      </div>
    </div>
    <div class="container flex flex-wrap md:flex-no-wrap gap-4">
      <div
        id="side-content-readme"
        v-html="mdRender(side.description)"
        class="markdown md:w-8/12"
      ></div>
      <div class="md:w-4/12 pt-4">
        <img :src="side.images[0].url" alt="">
        <div
          v-if="side.labels.length > 0"
          class="languages h-16 flex justify-start gap-4 items-center"
        >
          <Icon
            v-for="lang in side.labels"
            :key="lang"
            :name="lang"
            :dev="true"
            class="text-2xl"
          ></Icon>
        </div>
      </div>
    </div>

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
    const side = (await $axios.get(`sides/${route.params.slug}`)).data
    return { side }
  },
  methods: {
    mdRender(string) {
      return markdown.render(string)
    },
  },
}
</script>

<style lang="scss" scoped>
#side-header {
  @apply justify-between items-baseline;
  h1 {
    @apply font-bold;
  }
}
</style>
