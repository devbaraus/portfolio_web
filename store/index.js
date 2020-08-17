export const state = () => ({
  repos: [],
  articles: [],
  projects: [],
  sides: [],
  imageModal: {
    name:
      'https://trello-attachments.s3.amazonaws.com/5f36d21ab40f1e2ebb9a39f8/5f386e9dca726866b2d1d06e/a707652ebce9d85fb6da0d0402b59b9a/spotiminy_profile.png',
    url: 'Perfil do usuário',
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
