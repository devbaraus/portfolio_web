<template>
  <div class="card-grid">
    <ProjectCard
      v-for="project in projects"
      :key="project.url"
      :project="project"
      :level="level"
    />
  </div>
</template>

<script>
import { langToIcon } from '~/utils'
import Icon from '~/components/Icon'
import ProjectCard from './ProjectCard'

export default {
  name: 'PortfolioGrid',
  components: { ProjectCard, Icon },
  props: {
    projects: Array,
    level: String,
  },
}
</script>

<style lang="scss" scoped>

</style>
