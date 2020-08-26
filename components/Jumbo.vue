<template>
  <div class="relative bg-gray-light">
    <div
      class="min-h-screen flex w-screen pt-24 lg:pt-0 justify-between items-center"
    >
      <div class="container items-center">
        <div class="max-w-3xl mx-auto break-words">
          <div class="pb-24">
            <h2 class="font-ubuntu text-5xl tracking-tight">
              Olá, tudo bem?!
            </h2>
            <h3 class="font-bold font-poppins text-xl my-2">
              Meu chamo
              <span class="text-primary">Bruno de Araújo Alves</span> e este é
              meu portfólio.
            </h3>
            <h4 class="text-base text-justify">
              Tenho {{ new Date().getFullYear() - 1999 }} anos, estudante de
              <span class="text-primary">Ciência da Computação</span> e procuro sempre aprender algo novo.
              Comecei na computação aos 16 anos e ao longo da minha jornada criei alguns projetos e adquiri um conhecimento
              que acredito que deve ser compartilhado com outros.
              <br/>
              Sou <span class="text-primary">Desenvolvedor Web Full Stack</span>,
              tenho experiência em NodeJS, VueJS,
              Python entre outras linguagens e frameworks.
              Espero que goste!
            </h4>
          </div>
        </div>
      </div>
    </div>
    <AnimatedBackground class="absolute top-0" />
  </div>
</template>

<script>
import Button from '~/components/Button'
import Icon from '~/components/Icon'
import AnimatedBackground from '@/components/AnimatedBackground'
export default {
  name: 'Jumbo',
  components: {
    AnimatedBackground,
    Icon,
    Button,
  },
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
.jumbo-editor {
  @apply bg-dark rounded-lg;

  width: 30rem;
  height: 18rem;
}
</style>
