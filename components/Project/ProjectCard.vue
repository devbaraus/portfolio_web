<template>
  <article class="project">
    <div class="project-header">
      <Link :to="`/${level}/${project.id}`">
        <img
          :src="project.cover"
          :alt="`${project.name} Cover`"
          class="project-img cursor-pointer hover:opacity-75 transition-all duration-200 ease-in lazyload"
        />
      </Link>
      <Link
        :to="`/${level}/${project.id}`"
        class="project-header-content cursor-pointer hover:opacity-75 transition-all duration-200 ease-in"
      >
        <p>
          {{ project.name }}
        </p>
      </Link>
    </div>
    <div class="project-footer" v-if="project.labels.length > 0">
      <icon
        v-for="label in project.labels"
        :key="label"
        :dev="true"
        :name="label"
        class="project-badge"
      />
    </div>
  </article>
</template>

<script>
import Icon from '~/components/Icon'
import Link from '@/components/Link'

export default {
  name: 'ProjectCard',
  components: { Link, Icon },
  props: {
    project: { Object },
    level: String,
  },
}
</script>

<style lang="scss" scoped>
.project {
  @apply bg-light text-white shadow-lg relative;
  > div {
    @apply p-4;
  }

  .project-header {
    @apply relative  p-0;

    .project-header-content {
      @apply w-full flex justify-between p-4 bg-primary;
      bottom: 0;
    }

    .project-img {
      @apply w-full h-48 object-cover;
    }

    span {
      @apply text-sm;
      color: #e6e6f0;
    }
    i {
      @apply text-xl cursor-pointer;
    }
  }
  .project-footer {
    @apply flex h-16 items-center;

    i {
      @apply text-xl mr-2;
    }
  }
}
</style>
