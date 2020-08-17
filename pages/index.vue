<template>
  <div>
    <header>
      <Jumbo />
    </header>
    <section class="container skill-set-section">
      <h5 id="skill">Habilidades</h5>
      <skills-grid />
    </section>
    <section :class="`container ${projects.length < 1 && 'hidden'}`">
      <h5 id="projects">Projetos</h5>
      <portfolio-grid :projects="projects" level="projects" />
    </section>
    <section :class="`container ${sides.length < 1 && 'hidden'}`">
      <h5 id="side-projects">Projetos pessoais</h5>
      <portfolio-grid :projects="sides" level="sides" />
    </section>
    <section :class="`container ${repos.length < 1 && 'hidden'}`">
      <h5 id="repo">Repositórios</h5>
      <repository-grid :repos="repos" />
    </section>
  </div>
</template>

<script>
import Jumbo from '~/components/Jumbo'
import SkillsGrid from '~/components/SkillsGrid'
import RepositoryGrid from '~/components/RepositoryGrid'
import PortfolioGrid from '~/components/PortfolioGrid'

export default {
  scrollToTop: true,
  components: { PortfolioGrid, RepositoryGrid, SkillsGrid, Jumbo },
  async asyncData({ $axios, store }) {
    store.commit('repos', await (await $axios.get('repos')).data)

    // projects = await (await app.$axios.get( 'projects')).data
    //
    store.commit('sides', await (await $axios.get('sides')).data)
    //
  },
  computed: {
    repos() {
      return this.$store.state.repos
    },
    articles() {
      return this.$store.state.articles
    },
    projects() {
      return this.$store.state.projects
    },
    sides() {
      return this.$store.state.sides
    },
  },
}
</script>

<style lang="scss" scoped>
section.container {
  @apply pt-6 mb-12 relative;
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

  @media (min-width: 768px) {
    h5 {
      @apply text-4xl;
    }
  }
}
</style>
