<template>
  <div class="portfolio-grid">
    <article v-for="project in projects" :key="project.url" class="portfolio">
      <div
        class="portfolio-header "
      >
        <img
          :src="project.cover"
          :alt="`${project.name} Cover`"
          class="portfolio-img"
        />
        <Link
          :to="`/${level}/${project.id}/`"
          class="portfolio-header-content cursor-pointer hover:opacity-75 transition-all duration-200 ease-in"
        >
          <p>
            {{ project.name }}
          </p>
        </Link>
      </div>
      <div class="portfolio-footer" v-if="project.labels.length > 0">
        <icon
          v-for="label in project.labels"
          :key="label"
          :dev="true"
          :name="label"
          class="portfolio-badge"
        />
      </div>
    </article>
  </div>
</template>

<script>
import { langToIcon } from '~/utils'
import Icon from '~/components/Icon'

export default {
  name: 'PortfolioGrid',
  components: { Icon },
  props: {
    projects: Array,
    level: String,
  },
}
</script>

<style lang="scss" scoped>
.portfolio-grid {
  @apply grid mt-4 col-gap-4 row-gap-8;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
}
.portfolio {
  @apply bg-light text-white shadow-lg relative;
  > div {
    @apply p-4;
  }

  .portfolio-header {
    @apply relative  p-0;

    .portfolio-header-content {
      @apply w-full flex justify-between p-4 bg-primary;
      bottom: 0;
    }

    .portfolio-img {
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
  .portfolio-footer {
    @apply flex h-16 items-center;

    i {
      @apply text-xl mr-2;
    }
  }
}
</style>
