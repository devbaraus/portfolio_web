<template>
  <div
    class="min-h-screen bg-gray-light w-screen pt-24 md:pt-0 md:flex justify-between items-center"
  >
    <div class="container items-center">
      <div class="max-w-3xl mx-auto break-words">
        <div class="pb-24">
          <h2 class="font-ubuntu text-5xl tracking-tight">Ainda em desenvolvimento!!!</h2>
          <h3 class="font-bold font-poppins text-xl my-2">
            Meu nome é <span class="text-primary">Bruno de Araújo Alves</span> e
            este é meu portfólio.
          </h3>
          <h4 class="text-base text-justify">
            Tenho 21 anos, estudante de
            <span class="text-primary">Ciência da Computação</span> e aqui é
            onde compartilho um pouco do meu conhecimento. Sou
            <span class="text-primary">Desenvolvedor Web Full Stack</span>,
            tenho experiência em NodeJS, <icon name="nuxt"></icon> VueJS, Python
            entre outras linguagens e frameworks. Me envolvi na computação aos
            16 anos e resolvi postar um pouco da minha experiência nesses anos.
            Espero que goste!
          </h4>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button'
import Icon from '~/components/Icon'
export default {
  name: 'Jumbo',
  components: {
    Icon,
    Button,
  },
  data: () => ({}),
}
</script>

<style scoped>
.jumbo-editor {
  @apply bg-dark rounded-lg;

  width: 30rem;
  height: 18rem;
}
</style>
