<template>
  <div>
    <TopBar />
    <div class="pt-12">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import TopBar from '~/components/NavBar'
import Footer from '~/components/Footer'
export default {
  scrollToTop: true,
  components: {
    Footer,
    TopBar,
  },
  created() {
    if (process.browser) {
      window.onbeforeunload = function (event) {
        var s = 'You have unsaved changes. Really leave?'
        console.log('oi')
        event = event || window.event
        if (event) {
          // This is for IE
          event.returnValue = s
        }

        // This is for all other browsers
        return s
      }
    }
  },
}
</script>

<style>
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

@media (min-width: 1200px) {
  .container {
    @apply px-32;
  }
}
</style>
