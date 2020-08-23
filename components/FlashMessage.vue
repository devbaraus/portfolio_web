<template>
  <div
    id="flash-message-container"
    :class="`${show ? 'flash-active' : ''}
    fixed flex justify-center items-center cursor-pointer transition-all duration-200 ease-in bg-dark z-50 rounded-b`"
    @click="handleCloseFlash"
  >
    <div class="flash-message text-primary flex items-center">
      <Icon :name="flashMessage.status ? 'check' : 'x'" class="text-xl mr-1" />
      <p>
        {{ flashMessage.msg }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Icon from '@/components/Icon'

export default {
  name: 'FlashMessage',
  components: { Icon },
  data: () => ({
    show: false,
    timeout: false,
  }),
  computed: {
    ...mapState(['flashMessage']),
  },
  methods: {
    handleCloseFlash() {
      this.show = false
      clearTimeout(this.timeout)
    },
  },
  watch: {
    flashMessage(newval) {
      if (newval.msg !== '') {
        this.show = true
        this.timeout = setTimeout(() => {
          this.show = false
        }, 3000)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#flash-message-container {
  width: 12rem;
  height: 4rem;
  top: -8rem;
  left: calc(50vw - 6rem);
  &.flash-active {
    top: 0;
  }
}
</style>
