<template>
  <div>
    <div class="slideshow-container">
      <!-- Full-width images with number and caption text -->
      <figure
        v-for="(image, index) in images"
        :key="image.url"
        :class="`slide transition-all duration-200 ease-in-out fade  ${
          index !== slideIndex && 'hidden'
        }`"
      >
        <!--      <div class="numbertext">1 / 3</div>-->
        <img
          :src="image.url"
          :alt="image.name"
          style="width: 100%;"
          class="image-open-modal lazyload"
          @click="
            $store.commit('imageModal', { name: image.name, url: image.url })
          "
        />
        <figcaption>{{ image.name }}</figcaption>
      </figure>
      <!-- Next and previous buttons -->
    </div>
    <div class="dot-container">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="`dot ${index === slideIndex && 'dot-active'}`"
        @click="setIndex(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  props: {
    images: Array,
  },
  data: () => ({
    slideIndex: 0,
    i: null,
    t: null,
  }),
  methods: {
    interval(time = 5000) {
      this.i = setInterval(() => {
        this.slideIndex = (this.slideIndex + 1) % this.images.length
      }, time)
    },
    clearInterval() {
      clearInterval(this.i)
    },
    setIndex(index, time = 0) {
      clearTimeout(this.t)
      this.clearInterval()
      this.slideIndex = index
      this.t = setTimeout(() => {
        this.interval()
      }, 0)
    },
  },
  mounted() {
    this.interval()
  },
}
</script>

<style lang="scss" scoped>
.slideshow-container {
  figcaption {
    @apply mt-1 text-center;
  }
}
.dot-container {
  @apply flex justify-between mt-2;
  .dot {
    @apply w-full h-2 bg-dark cursor-pointer transition-all duration-200 ease-in;

    &:hover {
      @apply bg-light;
    }

    & + .dot {
      margin-left: 2px;
    }
    &.dot-active {
      @apply bg-primary;
    }
  }
}
</style>
