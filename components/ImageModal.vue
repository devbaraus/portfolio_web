<template>
  <div
    id="image-modal-container"
    :class="`${
      show ? 'active' : ''
    } transition-all duration-200 ease-in fixed w-screen h-screen flex items-center justify-center z-50`"
  >
    <figure class="z-50">
      <img :src="imageModal.url" :alt="imageModal.name" />
      <figcaption class="text-center mt-2 text-xl text-gray-light">
        {{ imageModal.name }}
      </figcaption>
    </figure>
    <div
      class="image-modal-handle w-screen h-screen bg-dark fixed z-40 cursor-pointer transition-all duration-200 ease-in"
      @click="show = false"
    ></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ImageModal',
  data: () => ({
    show: false,
  }),
  computed: {
    ...mapState(['imageModal']),
  },
  methods: {
    closeModal() {
      this.$store.commit('imageModal', { name: '', url: '' })
      this.show = false
    },
  },
  watch: {
    imageModal(newval) {
      if (newval.url !== '') this.show = true
    },
  },
}
</script>

<style lang="scss" scoped>
#image-modal-container {
  .image-modal-handle {
    opacity: 0.9;
  }

  &,
  & .image-modal-handle {
    bottom: 100%;
  }
  &.active,
  &.active .image-modal-handle {
    bottom: 0;
  }
  img {
    max-height: calc(100vh - 10rem);
    max-width: 100vw;
    object-fit: contain;
  }
}
</style>
