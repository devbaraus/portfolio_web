<template>
  <div ref="markdown"
    v-html="mdRender(content)"
    class="markdown"
  ></div>
</template>

<script>
import markdown from '@/utils/markdown'

export default {
  name: 'Markdown',
  props: {
    content: String
  },
  methods: {
    mdRender(string) {
      return markdown.render(string)
    },
  },
  mounted() {
   const markdownImages = this.$refs['markdown'].getElementsByTagName('img')
    for(let i = 0; i <  markdownImages.length; i++){
      const el = markdownImages[i]
      if(!el.className.includes('emoji')){
        el.addEventListener('click', () => {
          this.$store.commit('imageModal', {
            name: el.getAttribute('alt'),
            url: el.getAttribute('src'),
          })
        })
      }
    }
  }
}
</script>

<style scoped></style>
