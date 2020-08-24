<template>
  <footer id="contact" class="bg-gray-light">
    <!--    <hr class="container">-->
    <div class="container py-8 flex-wrap lg:flex-no-wrap">
      <div class="footer-links mb-8 lg:mb-0">
        <p class="text-2xl font-ubuntu my-2">Entre em contato</p>
        <a
          href="mailto:contato@baraus.dev"
          rel="noopener noreferrer"
          class="link"
          ><icon name="mail"></icon> contato@baraus.dev
        </a>
        <a
          href="tel:+5562991205888"
          rel="noopener noreferrer"
          class="link"
        ><icon name="phone"></icon> (62) 9 9120-6888
        </a>
<!--        <a-->
<!--          href="https://instagram.com/devbaraus"-->
<!--          target="_blank"-->
<!--          rel="noopener noreferrer"-->
<!--          class="link"-->
<!--          ><icon name="instagram"></icon> instagram:devbaraus</a-->
<!--        >-->
<!--        <a-->
<!--          href="https://linkedin.com/in/devbaraus"-->
<!--          target="_blank"-->
<!--          rel="noopener noreferrer"-->
<!--          class="link"-->
<!--          ><icon name="linkedin"></icon> linkedin:devbaraus</a-->
<!--        >-->
<!--        <a-->
<!--          href="https://github.com/devbaraus"-->
<!--          target="_blank"-->
<!--          rel="noopener noreferrer"-->
<!--          class="link"-->
<!--          ><icon name="github"></icon> github:devbaraus</a-->
<!--        >-->
<!--        <a-->
<!--          href="https://twitter.com/devbaraus"-->
<!--          target="_blank"-->
<!--          rel="noopener noreferrer"-->
<!--          class="link"-->
<!--          ><icon name="twitter"></icon> twitter:devbaraus</a-->
<!--        >-->
<!--        <a-->
<!--          href="https://app.rocketseat.com.br/me/devbaraus"-->
<!--          target="_blank"-->
<!--          rel="noopener noreferrer"-->
<!--          class="link"-->
<!--          ><icon name="rocketseat" :dev="true"></icon> rocketseat:devbaraus</a-->
<!--        >-->
      </div>
<!--      <div class="footer-form">-->
<!--        <form-->
<!--          name="contact"-->
<!--          method="POST"-->
<!--          action="/form-success/"-->
<!--          data-netlify-recaptcha="true"-->
<!--          data-netlify="true"-->
<!--        >-->
<!--          <div class="form-grid">-->
<!--            <label for="name">-->
<!--              <input-->
<!--                type="text"-->
<!--                name="name"-->
<!--                id="name"-->
<!--                placeholder="Nome completo"-->
<!--              />-->
<!--            </label>-->
<!--            <label for="email">-->
<!--              <input-->
<!--                type="email"-->
<!--                name="email"-->
<!--                id="email"-->
<!--                placeholder="E-mail"-->
<!--              />-->
<!--            </label>-->
<!--            <label for="message" class="col-span-2">-->
<!--              <textarea-->
<!--                name="message"-->
<!--                id="message"-->
<!--                cols="30"-->
<!--                rows="10"-->
<!--                placeholder="Mensagem"-->
<!--              ></textarea>-->
<!--            </label>-->
<!--          </div>-->
<!--          <span class="text-xs">Por favor, responda o reCAPTCHA abaixo.</span>-->
<!--          <div class="form-flex flex items-center justify-between">-->
<!--            <div data-netlify-recaptcha="true"></div>-->
<!--            <button type="submit">Enviar</button>-->
<!--          </div>-->
<!--        </form>-->
<!--      </div>-->
    </div>
    <div class="container flex flex-col">
      <a href="https://app.netlify.com/sites/devbaraus/deploys">
        <img
          src="https://api.netlify.com/api/v1/badges/1f7e2e0c-d846-4e5a-bed6-efc2b28fd45f/deploy-status"
          alt="Netlify Status"
          class="lazyload"
        />
      </a>
      <p class="text-xs pb-4 text-center">
        Desenvolvido utilizando
        <a href="http://nuxtjs.org" target="_blank" rel="noopener" class="link"
          >NuxtJS</a
        >,
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener"
          class="link"
          >TailwindCSS</a
        >,
        <a
          href="https://netilify.com/"
          target="_blank"
          rel="noopener"
          class="link"
          >Netlify</a
        >
        entre outras tecnologias.
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
      .form-grid {
        @apply grid grid-cols-2 col-gap-2 row-gap-2 mb-2;
      }

      button {
        @apply py-2 px-8 h-full bg-dark text-gray-light col-start-2 transition-all duration-200 ease-in;
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
