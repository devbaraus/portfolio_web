<template>
  <div class="portfolio-grid">
    <article v-for="project in projects" :key="project.url" class="portfolio">
      <nuxt-link tag="div" :to="`/${level}/${project.id}`" class="portfolio-header">
        <img
          :src="project.cover"
          :alt="`${project.name} Cover`"
          class="portfolio-img"
        />
        <div class="portfolio-header-content">
          <div>
            <p>{{project.name}}</p>
            <!--            <span>Criado em: 2020-02-16</span>-->
          </div>
<!--          <div class="flex items-center justify-between">-->
<!--            <i class="icon-external-link"></i>-->
<!--          </div>-->
        </div>
      </nuxt-link>
<!--      <div class="portfolio-body">-->
<!--        {{project.desc}}-->
<!--      </div>-->
      <div class="portfolio-footer" v-if="project.labels.length > 0">
        <icon v-for="label in project.labels" :key="label" :dev="true" :name="label" class="portfolio-badge"/>
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
    level: String
  },
  data: () => ({
    // projects: [
    //   {
    //     heading: 'CPA - Comissão Própria de Avaliação',
    //     img: {
    //       url: 'https://baraus.dev/img/projetos/sites/cpa/cpa_home.png',
    //       alt: 'Plataforma CPA Dashboard'
    //     },
    //     url: 'https://cpa.bcc.ifg.edu.br',
    //     desc: 'Bot para Discord criado em Javascript utilizando as bibliotecas "DiscordJS" e "Canvas".',
    //     labels: ['vuejs', 'python', 'docker']
    //   },
    //   {
    //     heading: 'IFG Produz',
    //     url: 'https://lattes.bcc.ifg.edu.br',
    //     img: {
    //       url: 'https://baraus.dev/img/projetos/sites/lattes/lattes_home.png',
    //       alt: 'Plataforma IFG Produz'
    //     },
    //     desc: 'Bot para Discord criado em Javascript utilizando as bibliotecas "DiscordJS" e "Canvas".',
    //     labels: ['vuejs', 'python', 'docker']
    //   },
    //   {
    //     heading: 'PAI - Processo de Avaliação Interno',
    //     // url: 'https://lattes.bcc.ifg.edu.br',
    //     img: {
    //       url: 'https://baraus.dev/img/projetos/sites/pai/pai_home.png',
    //       alt: 'Plataforma IFG Produz'
    //     },
    //     desc: 'Bot para Discord criado em Javascript utilizando as bibliotecas "DiscordJS" e "Canvas".',
    //     labels: ['php', 'yii', 'docker']
    //   },
    // ]
  })
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
      @apply absolute w-full h-24 flex justify-between p-4 gap-2;
      background: rgba(238, 86, 34, 0.9);
      bottom: 0;
    }

    .portfolio-img {
      @apply w-full h-48 object-cover;
    }

    p {
      @apply text-xl font-bold;
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
    @apply flex h-16 items-center gap-2;

    i {
      @apply text-xl mr-2;
    }
  }
}
</style>
