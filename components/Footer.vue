<template>
  <footer class="bg-gray-light">
    <div class="container py-8 flex-wrap md:flex-no-wrap">
      <div class="footer-links">
        <p class="text-2xl font-ubuntu my-2">Entre em contato</p>
        <a
          href="https://instagram.com/devbaraus"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          ><icon name="instagram"></icon> instagram:devbaraus</a
        >
        <a
          href="https://linkedin.com/in/devbaraus"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          ><icon name="linkedin"></icon> linkedin:devbaraus</a
        >
        <a
          href="https://instagram.com/devbaraus"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          ><icon name="github"></icon> github:devbaraus</a
        >
        <a
          href="https://instagram.com/devbaraus"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          ><icon name="twitter"></icon> twitter:devbaraus</a
        >
        <a
          href="app.rocketseat.com.br/me/devbaraus"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          ><icon name="globe"></icon> rocketseat:devbaraus</a
        >
      </div>
      <div class="footer-form">
        <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
          <label for="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome completo"
            />
          </label>
          <label for="email">
            <input type="email" name="email" id="email" placeholder="E-mail" />
          </label>
          <label for="message" class="col-span-2">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Mensagem"
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
    <div class="container">
      <p class="text-xs pb-4">
        Desenvolvido utilizando
        <a href="http://nuxtjs.org" target="_blank" rel="noopener" class="link">NuxtJS</a>,
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="link">TailwindCSS</a>,
        <a href="https://netilify.com/" target="_blank" rel="noopener" class="link">Netlify</a> entre outras tecnologias.
      </p>
    </div>
  </footer>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  name: 'Footer',
  components: { Icon },
}
</script>

<style lang="scss" scoped>
.container {
  @apply flex items-center justify-center gap-4;
  > div {
    @apply flex items-center justify-center w-full flex-col;
  }
  .footer-links {
    a {
      @apply my-2;
    }
  }
  .footer-form {
    form {
      @apply grid grid-cols-2 col-gap-2 row-gap-2;
      button {
        @apply py-2 px-3 bg-dark text-gray-light col-start-2 transition-all duration-200 ease-in;
        &:hover {
          @apply bg-primary;
        }
      }
      label {
        @apply flex;
      }
      input,
      textarea {
        @apply outline-none p-2 shadow;
      }
      input {
        @apply w-full;
      }
      textarea {
        @apply h-32 w-full;
        resize: none;
      }
    }
  }
}
</style>
