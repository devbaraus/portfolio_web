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
      return markdown.render(string)
    },
  },
  mounted() {
    this.$refs['markdown'].querySelectorAll('img').forEach((el) => {
      function addClass(element, classname) {
        var currentClassList = (element.className || '').split(/\s+/)
        currentClassList.push(
          currentClassList.indexOf(classname) > -1 ? '' : classname,
        )
        element.className = currentClassList.join(' ').trim()
      }

      if (!el.className.includes('emoji')) {
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
