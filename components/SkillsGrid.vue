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
        heading: 'Design de Aplicações',
        icon: 'behance',
        // iconFeather: true,
        desc:
          'Photoshop, Illustrator, Premiere Pro, Figma, Adobe XD, Behance e Pinterest',
      },

      {
        heading: 'Desenvolvimento Back End',
        icon: 'nodejs',
        desc:
          'NodeJS, Express, Django, Yii2, PosgreSQL, MySQL, SQLite, MongoDB e AJAX',
      },
      {
        heading: 'Desenvolvimento Front End',
        icon: 'vuejs',
        desc:
          'HTML5, CSS3, JavaScript, VueJS, ReactJS, TailwindCSS, Bootstrap e SASS',
      },
      {
        heading: 'Controle de Versão Git',
        icon: 'git',
        desc:
          'Versionamento de código utilizando GitHub ou GitLab',
      },
      {
        heading: 'Conteinerização',
        icon: 'docker',
        desc:
          'Configuração de aplicações back end e front end em ambiente docker',
      },
      {
        heading: 'Auto-didata',
        icon: 'book-open',
        iconFeather: true,
        desc:
          'Busca de conhecimento utilizando documentação, vídeos e livros',
      },

    ],
  }),
}
</script>

<style lang="scss" scoped>
.skill-set-grid {
  @apply grid mt-4 col-gap-4 row-gap-8;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-template-rows: 1fr;
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
