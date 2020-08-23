<template>
  <div>
    <img src="/logo.svg" class="hidden" alt="Logo Devbaraus" />
    <ImageModal></ImageModal>
    <flash-message></flash-message>
    <PageScroller/>
    <TopBar />
    <div class="pt-12" ref="listener">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import TopBar from '~/components/NavBar'
import Footer from '~/components/Footer'
import ImageModal from '@/components/ImageModal'
import PageScroller from '@/components/PageScroller'
import FlashMessage from "@/components/FlashMessage";
export default {
  scrollToTop: true,
  components: {
    FlashMessage,
    PageScroller,
    ImageModal,
    Footer,
    TopBar,
  },
  mounted() {
    this.$refs.listener.addEventListener('scroll', () => {
      console.log('ok')
    })
  },
}
</script>

<style lang="scss">
:root {
  --color-gray-light: #f0f0f7;
  --color-dark: #31263e;
  --color-darker: #221e22;
  --color-light: #44355b;
  --color-primary: #ee5622;
}

html,
body {
  max-width: 100vw;
  background: var(--color-dark);
  font-family: 'Poppins';
  font-weight: 400;
  color: var(--color-dark);
  scroll-behavior: smooth;
}

body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

body::-webkit-scrollbar {
  display: none;
}

.card-grid{
  @apply grid mt-4 col-gap-4 row-gap-8;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
}

.grid-suggestions {
  grid-template-areas: 'sug1' 'sug2' 'ad';

  & > div:nth-child(1) {
    grid-area: sug1;
  }
  & > div:nth-child(2) {
    grid-area: ad;
  }
  & > div:nth-child(3) {
    grid-area: sug2;
  }
}

@media (min-width: 600px) {
  .grid-suggestions {
    grid-template-areas: 'sug1 sug2' 'ad ad';
  }
}
@media (min-width: 1028px) {
  .grid-suggestions {
    grid-template-areas: 'sug1 ad sug2';
  }
}

.container {
  @apply px-8 mx-auto;
}

a.link {
  @apply relative;
  background-size: 100% 200%;
  background-position: 0 0;
  transition: background-position 300ms ease-in-out, padding 300ms ease-in-out;
  background-image: linear-gradient(
    transparent 0%,
    transparent calc(50% - 8px),
    rgba(238, 86, 34, 0.35) calc(50% - 8px),
    rgba(238, 86, 34, 0.35) 100%
  );
}
a.link:hover {
  background-image: linear-gradient(
    transparent,
    transparent calc(50% - 8px),
    rgba(238, 86, 34, 0.8) calc(50% - 8px),
    rgba(238, 86, 34, 0.8)
  );
  background-position: 0 100%;
}

.image-open-modal {
  @apply cursor-pointer transition-all duration-200 ease-in;
  &:hover {
    @apply opacity-75;
  }
}

@media (min-width: 1280px) {
  .container {
    @apply px-32;
  }
}
</style>
