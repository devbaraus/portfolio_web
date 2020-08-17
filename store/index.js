export const state = () => ({
  repos: [],
  articles: [],
  projects: [],
  sides: [],
  imageModal: {
    name: '',
    url: '',
  },
})

export const mutations = {
  repos(state, repos) {
    state.repos = repos
  },
  articles(state, articles) {
    state.articles = articles
  },
  projects(state, projects) {
    state.projects = projects
  },
  sides(state, sides) {
    state.sides = sides
  },
  imageModal(state, image) {
    state.imageModal = image
  },
}
