<template>
  <div class="skill-set-grid">
    <article v-for="skill in skills" :key="skill.icon" class="skill-set">
      <div class="skill-set-header">
        <Icon
          class="skill-set-icon"
          :dev="!skill.iconFeather"
          :name="skill.icon"
        />
        <p>{{ skill.heading }}</p>
      </div>
      <div class="skill-set-body">
        {{ skill.desc }}
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'SkillsGrid',
  data: () => ({
    skills: [
      {
        heading: 'Controle de Versão Git',
        icon: 'git',
        desc:
          'Bot para Discord criado em Javascript utilizando as bibliotecas "DiscordJS" e "Canvas".',
      },
      {
        heading: 'Desenvolvimento Back End',
        icon: 'nodejs',
        desc:
          'Bot para Discord criado em Javascript utilizando as bibliotecas "DiscordJS" e "Canvas".',
      },
      {
        heading: 'Desenvolvimento Front End',
        icon: 'vuejs',
        desc:
          'Bot para Discord criado em Javascript utilizando as bibliotecas "DiscordJS" e "Canvas".',
      },
      {
        heading: 'Conteinerização',
        icon: 'docker',
        desc:
          'Bot para Discord criado em Javascript utilizando as bibliotecas "DiscordJS" e "Canvas".',
      },
      {
        heading: 'Auto-didata',
        icon: 'book-open',
        iconFeather: true,
        desc:
          'Bot para Discord criado em Javascript utilizando as bibliotecas "DiscordJS" e "Canvas".',
      },
      {
        heading: 'Design de Aplicações',
        icon: 'figma',
        iconFeather: true,
        desc:
          'Bot para Discord criado em Javascript utilizando as bibliotecas "DiscordJS" e "Canvas".',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.skill-set-grid {
  @apply grid mt-4 col-gap-4 row-gap-8;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
}
.skill-set {
  @apply bg-light pb-4 text-gray-light shadow-lg;
  > div {
    @apply p-4;
  }
  .skill-set-header {
    /*@apply flex items-center gap-1 justify-center;*/
    i {
      @apply text-4xl text-primary;
    }
    p {
      @apply text-xl;
    }
  }
}
</style>
