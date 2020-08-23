<template>
  <div ref="markdown" v-html="mdRender(content)" class="markdown"></div>
</template>

<script>
import markdown from '@/utils/markdown'

export default {
  name: 'Markdown',
  props: {
    content: String,
  },
  methods: {
    mdRender(string) {
      return markdown.makeHtml(string)
    },
  },
  mounted() {
    this.$refs['markdown'].querySelectorAll('code').forEach((el) => {
      ;[
        'cursor-pointer',
        'hover:opacity-75',
        'transition-all',
        'duration-200',
        'ease-in',
      ].map((c) => {
        el.classList.add(c)
      })
      el.addEventListener('click', () => {
        navigator.clipboard.writeText(el.textContent)
        this.$store.commit('flashMessage', {
          status: true,
          msg: 'Código copiado!',
        })
      })
    })
    this.$refs['markdown'].querySelectorAll('img').forEach((el) => {
      if (!el.className.includes('emoji')) {
        ;[
          'cursor-pointer',
          'hover:opacity-75',
          'transition-all',
          'duration-200',
          'ease-in',
          'lazyload',
        ].map((c) => {
          el.classList.add(c)
        })
        el.addEventListener('click', () => {
          this.$store.commit('imageModal', {
            name: el.getAttribute('alt'),
            url: el.getAttribute('src'),
          })
        })
      }
    })
  },
}
</script>

<style scoped></style>
