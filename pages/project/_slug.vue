<template>
  <div ref="page">
    <div class="bg-gray-light text-dark pb-8">
      <div id="project-banner" class="bg-dark h-48">
        <div class="container-fluid flex items-center h-full">
          <img
            :src="project.cover"
            alt="Banner artigo"
            class="object-cover h-full w-full image-open-modal"
          />
        </div>
      </div>
      <div id="project-header" class="container md:flex pt-4 pb-8">
        <div>
          <h1 class="text-3xl md:text-4xl">{{ project.name }}</h1>
        </div>
        <div
          :class="`mt-8 md:mt-0 ${
            (project.url === null || project.url === '') && 'hidden'
          }`"
        >
          <Button icon="external-link" :link="project.url"
            >Acessar projeto</Button
          >
        </div>
      </div>
      <div class="container flex flex-wrap md:flex-no-wrap gap-4">
        <markdown
          id="project-content-readme"
          :content="project.description"
          class="md:w-8/12"
        ></markdown>
        <div id="project-projectbar" class="md:w-4/12 pt-4">
          <ImageCarousel :images="project.images"></ImageCarousel>
          <hr class="bg-dark my-4" />
          <div
            v-if="project.labels.length > 0"
            class="flex justify-center items-center"
          >
            <Icon
              v-for="lang in project.labels"
              :key="lang"
              :name="lang"
              :dev="true"
              class="text-2xl"
            ></Icon>
          </div>
          <div class="mt-4">
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
              >{{ project.url }}</a
            >
          </div>
          <div
            v-if="project.contents.length > 0"
            class="flex justify-start flex-wrap items-center mt-4"
          >
            <Button
              v-for="content in project.contents"
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
              level="project"
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
    // console.log(route.params.slug)
    const project = await (await $axios.get(`projects/${route.params.slug}`))
      .data

    console.log(project)
    app.head.title = `${project.name} | DevBaraus`
    app.head.description = `Projeto ${project.name}.`
    let suggestions = await (
      await $axios.get('suggest/projects', {
        params: { id: project.id, suggestions: 2 },
      })
    ).data

    suggestions =
      suggestions.length === 2
        ? [suggestions[0], , suggestions[1]]
        : [suggestions[0], null]

    return { project, suggestions }
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
#project-header {
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
