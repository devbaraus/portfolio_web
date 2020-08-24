<template>
  <div>
    <div
      :class="`fixed nav-mobile h-screen w-screen bg-gray-light z-10 pt-16 ${
        open && 'nav-mobile-active'
      }`"
    >
      <nav>
        <ul>
          <li
            v-for="link in links"
            :key="link.url"
            @click="() => (open = !open)"
          >
            <Link
              :to="link.url"
              :class="link.button && 'text-gray-light py-1 px-2 bg-dark'"
            >{{ link.label }}</Link
            >
          </li>
        </ul>
      </nav>

      <div class="mt-4">
        <span @click="scrollUp">
          <Icon name="chevron-up" class="p-2 text-3xl"></Icon>
        </span>
        <span @click="scrollDown">
          <Icon name="chevron-down" class="p-2 text-3xl" />
        </span>
      </div>
    </div>
    <div class="fixed bg-gray-light w-screen z-20">
      <nav
        class="py-2 flex justify-between items-center w-full container nav-desktop"
      >
        <Link to="/" class="cursor-pointer logo">
          <!--          <Logo class="h-12 w-16 inline-block" />-->
          <h1 class="font-bold text-2xl align-middle inline-block">
            <span class="text-primary">Dev</span>Baraus
          </h1>
        </Link>
        <span class="block lg:hidden" @click="() => (open = !open)">
          <Icon
            :name="`${open ? 'arrow-up' : 'arrow-down'}`"
            class="text-2xl"
          ></Icon>
        </span>
        <ul class="hidden list-reset lg:flex">
          <li v-for="link in links" :key="link.url" :class="''">
            <Link
              :to="link.url"
              :class="link.button && 'text-gray-light py-1 px-2 bg-dark'"
              >{{ link.label }}</Link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import Icon from '~/components/Icon'
import Link from '@/components/Link'
export default {
  name: 'index.vue',
  components: {
    Link,
    Icon,
    Logo,
  },
  data: () => ({
    open: false,
    links: [
      {
        url: '/',
        label: 'Home',
      },
      {
        url: '/#skills',
        label: 'Habilidades',
      },
      {
        url: '/#articles',
        label: 'Artigos',
      },
      {
        url: '/#projects',
        label: 'Projetos',
      },
      // {
      //   url: '/#side-projects',
      //   label: 'Pessoais',
      // },
      {
        url: '/#repos',
        label: 'Repositórios',
      },

      {
        url: '/#contact',
        button: true,
        label: 'Contato',
      },
    ],
  }),
  methods: {
    closeNav() {
      this.open = false
    },
    scrollDown() {
      this.closeNav()
      this.$scrollTo('footer', 0, { force: true })
    },
    scrollUp() {
      this.closeNav()
      this.$scrollTo('body', 0, { force: true })
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-desktop {
  .logo {
    @apply transition-opacity duration-200 ease-in;
    &:hover {
      @apply opacity-75;
    }
  }

  ul {
    @apply gap-4;
    & > li a {
      @apply transition-all duration-200 ease-in;
      &:hover {
        @apply text-primary;
      }
    }
  }
}

nav {
  ul {
    @apply items-center font-bold;
  }
}

.nav-mobile {
  @apply flex items-center flex-col justify-center transition-all duration-200 ease-in;
  bottom: 100%;
  &.nav-mobile-active {
    bottom: 0;
  }
  nav {
    @apply flex items-center justify-center;
    ul {
      @apply flex flex-col justify-between;

      li {
        @apply mb-8;
        a {
          @apply text-3xl;
        }
      }
    }
  }
}
</style>
