<template>
  <div>
    <div class="bg-gray-light text-dark pb-8">
      <div id="side-banner" class="bg-dark h-48">
        <div class="container flex items-center h-full">
          <img
            :data-src="side.cover"
            :alt="`${side.name} logotipo`"
            class="container object-contain h-32"
          />
        </div>
      </div>
      <div id="side-header" class="container lg:flex pt-4 pb-8">
        <div>
          <h1 class="text-3xl lg:text-4xl">{{ side.name }}</h1>
        </div>
        <div
          :class="`mt-8 lg:mt-0 ${
            (side.url === null || side.url === '') && 'hidden'
          }`"
        >
          <Button icon="external-link" :link="side.url">Acessar projeto</Button>
        </div>
      </div>
      <div class="container flex flex-wrap lg:flex-no-wrap gap-4">
        <markdown
          id="side-content-readme"
          :content="side.description"
          class="lg:w-8/12"
        ></markdown>
        <div id="side-sidebar" class="lg:w-4/12 pt-4">
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
            :class="`mt-4 ${
              (side.url === null ||
                side.url === '' ||
                typeof side.url === 'undefined') &&
              'hidden'
            }`"
          >
            <a
              :href="side.url"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
              >{{ side.url }}</a
            >
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
    <div class="bg-dark">
      <section id="repo-suggestions" class="container">
        <h5>Sugestões</h5>
        <div class="card-grid grid-suggestions">
          <div v-for="(item, index) in suggestions" :key="index">
            <ProjectCard
              v-if="index % 2 === 0"
              :project="item"
              level="side"
              class="h-full"
            ></ProjectCard>
            <div
              class="flex justify-center flex-col items-center text-gray-light text-center px-4 h-full"
              v-else
            >
              <h6 class="text-2xl mb-8">
                Novos projetos serão adicionados em breve!
              </h6>
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
import ImageCarousel from '@/components/ImageCarousel'
import Link from '@/components/Link'
import ProjectCard from '@/components/Project/ProjectCard'
export default {
  name: 'slug',
  components: { ProjectCard, Link, ImageCarousel, Markdown, Button, Icon },
  async asyncData({ route, $axios, app }) {
    const side = await (await $axios.get(`sides/${route.params.slug}`)).data

    let suggestions = await (
      await $axios.get('suggest/sides', {
        params: { id: side.id, suggestions: 2 },
      })
    ).data

    suggestions =
      suggestions.length === 2
        ? [suggestions[0], , suggestions[1]]
        : [suggestions[0], null]

    return { side, suggestions }
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
