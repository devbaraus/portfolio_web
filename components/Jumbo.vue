<template>
  <div class="min-h-screen bg-gray-light w-screen pt-24 md:pt-0 md:flex justify-between items-center">
    <div class="container items-center">
      <div class="max-w-3xl mx-auto">
        <div class="pb-24">
          <h2 class="font-ubuntu text-5xl tracking-tight">Olá, tudo bem?!</h2>
          <h3 class="font-bold font-poppins text-xl my-2">
            Meu nome é <span class="text-primary">Bruno de Araújo Alves</span> e este é meu portfólio.
          </h3>
          <h4 class="text-base text-justify">
            Tenho 21 anos, estudante de
            <span class="text-primary">Ciência da Computação</span> e aqui é onde
            compartilho um pouco do meu conhecimento. Sou <span class="text-primary">Desenvolvedor Web Full
            Stack</span>, tenho experiência em NodeJS, VueJS, Python entre outras
            linguagens e frameworks. Me envolvi na computação aos 16 anos e
            resolvi postar um pouco da minha experiência nesses anos. Espero que
            goste!
          </h4>
          <div class="flex items-center justify-start gap-2 col-gap-3 mt-8 flex-wrap">
            <Button
              text="GitHub"
              link="https://github.com/devbaraus"
              icon="github"
            />
            <Button
              text="Instagram"
              link="https://instagram.com/devbaraus"
              icon="instagram"
            />
            <Button
              text="Linkedin"
              link="https://linkedin.com/in/devbaraus"
              icon="linkedin"
            />
            <Button
              text="Twitter"
              link="https://twitter.com/devbaraus"
              icon="twitter"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button'
export default {
  name: 'Jumbo',
  components: {
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
