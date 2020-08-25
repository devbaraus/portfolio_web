export const state = () => ({
  flashMessage: {
    status: false,
    msg: '',
  },
  imageModal: {
    name: '',
    url: '',
  },
})

export const mutations = {
  imageModal(state, image) {
    state.imageModal = image
  },
  flashMessage(state, flash) {
    state.flashMessage = flash
  },
}
