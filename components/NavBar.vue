<template>
  <div>
    <div
      :class="`fixed nav-mobile h-screen w-screen bg-gray-light z-20 ${
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
            <nuxt-link :to="link.url" tag="a">{{ link.label }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="fixed bg-gray-light w-screen z-10">
      <nav
        class="py-2 flex justify-between items-center w-full container nav-desktop"
      >
        <nuxt-link to="/" class="cursor-pointer logo">
          <!--          <Logo class="h-12 w-16 inline-block" />-->
          <h1 class="font-bold text-2xl align-middle inline-block">
            <span class="text-primary">Dev</span>Baraus
          </h1>
        </nuxt-link>
        <span class="block md:hidden" @click="() => (open = !open)">
          <Icon
            :name="`${open ? 'arrow-up' : 'arrow-down'}`"
            class="text-2xl"
          ></Icon>
        </span>
        <ul class="hidden list-reset md:flex">
          <li v-for="link in links" :key="link.url" :class="''">
            <nuxt-link
              :to="link.url"
              tag="a"
              :class="link.button && 'text-gray-light py-1 px-2 bg-dark'"
              >{{ link.label }}</nuxt-link
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
export default {
  name: 'index.vue',
  components: {
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
        url: '/#skill',
        label: 'Habilidades',
      },
      {
        url: '/#side-projects',
        label: 'Projetos',
      },
      // {
      //   url: '/#side-projects',
      //   label: 'Pessoais',
      // },
      {
        url: '/#repo',
        label: 'Repositórios',
      },
      {
        url: '/#blog',
        label: 'Blog',
      },
      {
        url: '/#contact',
        button: true,
        label: 'Contato',
      },
    ],
  }),
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
  @apply flex items-center justify-center transition-all duration-200 ease-in;
  bottom: 100%;
  &.nav-mobile-active {
    bottom: 0;
  }
  nav {
    @apply h-full flex items-center justify-center;
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
