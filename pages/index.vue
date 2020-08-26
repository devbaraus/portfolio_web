<template>
  <div>
    <header>
      <Jumbo/>
    </header>
    <section class="container social-media-section">
      <div
        class="flex items-center justify-between gap-2 col-gap-3 mt-8 flex-wrap"
      >
        <Button text="GitHub" link="https://github.com/devbaraus" icon="github"
        >GitHub
        </Button
        >
        <Button
          text="Instagram"
          link="https://instagram.com/devbaraus"
          icon="instagram"
        >Instagram
        </Button
        >
        <Button link="https://linkedin.com/in/devbaraus" icon="linkedin"
        >Linkedin
        </Button
        >
        <Button link="https://twitter.com/devbaraus" icon="twitter"
        >Twitter
        </Button
        >
        <Button
          link="https://app.rocketseat.com.br/me/devbaraus"
          :dev="true"
          icon="rocketseat"
        >Rocketseat
        </Button
        >
        <Button link="https://dev.to/devbaraus" :dev="true" icon="devto"
        >DEV
        </Button
        >
        <Button
          link="https://profile.codersrank.io/user/devbaraus"
          :dev="true"
          icon="codersrank"
        >CodersRank
        </Button
        >
      </div>
    </section>
    <section class="container skill-set-section">
      <h5 id="skills">Habilidades</h5>
      <skills-grid/>
    </section>
    <section id="articles" :class="`container ${articles.length < 1 && 'hidden'}`">
      <h5>Artigos</h5>
      <article-grid :articles="articles"/>
    </section>
    <section id="projects" :class="`container ${projects.length < 1 && 'hidden'}`">
      <h5>Projetos</h5>
      <project-grid :projects="projects" level="project"/>
    </section>
    <section id="side-projects" :class="`container ${sides.length < 1 && 'hidden'}`">
      <h5>Projetos pessoais</h5>
      <project-grid :projects="sides" level="side"/>
    </section>
    <section id="repos" :class="`container ${repos.length < 1 && 'hidden'}`">
      <h5>Repositórios</h5>
      <repository-grid :repos="repos"/>
    </section>
  </div>
</template>

<script>
import Jumbo from "~/components/Jumbo";
import SkillsGrid from "~/components/SkillsGrid";
import RepositoryGrid from "~/components/Repo/RepositoryGrid";
import ArticleGrid from "~/components/Article/ArticleGrid";
import ProjectGrid from "~/components/Project/ProjectGrid";

export default {
  components: { ProjectGrid, RepositoryGrid, SkillsGrid, Jumbo, ArticleGrid },
  async asyncData({ $axios }) {
    let repos;
    let articles;
    let sides;
    let projects;

    repos = await (await $axios.get("repos")).data.repos

    articles = await (await $axios.get("articles")).data.articles

    sides = await (await $axios.get("sides")).data.sides

    projects = await (await $axios.get("projects")).data.projects

    return { repos, articles, sides, projects };
  }
};
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
