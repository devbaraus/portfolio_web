<template>
  <div>
    <header>
      <Jumbo />
    </header>
    <section class="container skill-set-section">
      <h5 id="skill">Habilidades</h5>
      <skills-grid />
    </section>
    <section class="container portfolio-section">
      <h5 id="projects">Projetos</h5>
      <portfolio-grid :projects="projects" />
    </section>
    <section class="container portfolio-section">
      <h5 id="side-projects">Projetos pessoais</h5>
      <portfolio-grid :projects="sides" />
    </section>
    <section class="container repo-section">
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
  components: { PortfolioGrid, RepositoryGrid, SkillsGrid, Jumbo },
  async asyncData({ $axios }) {
    const baseURL = 'https://portfolio-serverapi.herokuapp.com/'

    let repos = await (await fetch(baseURL + 'repos')).json()

    let projects = await (await fetch(baseURL + 'projects')).json()

    let sides = await (await fetch(baseURL + 'sides')).json()

    return { repos, projects, sides }
  },
}
</script>

<style lang="scss" scoped>
section.container {
  @apply pt-6 mb-12 relative;
  border-top: 1px solid var(--color-light);

  h5 {
    @apply font-ubuntu text-4xl leading-loose relative text-primary;
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
