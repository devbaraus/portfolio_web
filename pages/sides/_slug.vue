<template>
  <div class="bg-gray-light text-dark pb-8">
    <div id="side-banner" class="bg-dark h-48">
      <div class="container flex items-center h-full">
        <img
          :src="side.cover"
          :alt="`${side.name} logotipo`"
          class="container object-contain h-32"
        />
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
      <markdown
        id="side-content-readme"
        :content="side.description"
        class="md:w-8/12"
      ></markdown>
      <div id="side-sidebar" class="md:w-4/12 pt-4">
        <ImageCarousel :images="side.images"></ImageCarousel>
        <hr class="bg-dark my-4" />
        <div
          v-if="side.labels.length > 0"
          class="flex justify-center items-center"
        >
          <Icon
            v-for="lang in side.labels"
            :key="lang"
            :name="lang"
            :dev="true"
            class="text-2xl"
          ></Icon>
        </div>
        <div
          v-if="side.contents.length > 0"
          class="flex justify-start flex-wrap items-center mt-4"
        >
          <Button
            v-for="content in side.contents"
            :key="content.url"
            icon="download"
            class="text-sm px-1"
            :link="content.url"
            >{{ content.name }}</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import ImageCarousel from '@/components/ImageCarousel'
export default {
  name: 'slug',
  components: { ImageCarousel, Markdown, Button, Icon },
  async asyncData({ route, $axios, app }) {
    const side = (await $axios.get(`sides/${route.params.slug}`)).data

    app.head.title = `${side.name} | DevBaraus`
    app.head.description = `Projeto pessoal ${side.name}.`

    return { side }
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
