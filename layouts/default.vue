<template>
  <div>
    <TopBar/>
    <div class="pt-12">
      <Nuxt />
    </div>
    <Footer/>
  </div>
</template>

<script>
  import TopBar from '~/components/NavBar'
  import Footer from '~/components/Footer'
  export default {
    components: {
      Footer,
      TopBar
    }
  }
</script>

<style>
  /*:root {*/
  /*  --color-gray-light:#F0F0F7;*/
  /*  --color-dark: #262C35;*/
  /*  --color-darker: #2F2C42;*/
  /*  --color-light: #33374D;*/
  /*  --color-primary-light: #F56565;*/
  /*  --color-primary: #f54c4c;*/
  /*  --color-primary-dark: #491e1e;*/
  /*} */
  :root {
    --color-gray-light:#F0F0F7;
    --color-dark: #31263E;
    --color-darker: #221E22;
    --color-light: #44355B;
    --color-primary-light: #F56565;
    --color-primary: #EE5622;
    --color-primary-dark: #491e1e;
  }
  /*:root {*/
  /*  --color-gray-light:#F0F0F7;*/
  /*  --color-dark: #666a86;*/
  /*  --color-darker: #333333;*/
  /*  --color-light: #95B8D1;*/
  /*  --color-primary-light: #F56565;*/
  /*  --color-primary: #E8DDB5;*/
  /*  --color-primary-dark: #491e1e;*/
  /*}*/

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

  @media (min-width: 1200px){
    .container {
      @apply px-32;
    }
  }

</style>
