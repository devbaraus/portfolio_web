<template>
  <div
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
}
</script>

<style scoped></style>
