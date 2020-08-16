export const state = () => ({
  repos: [],
  articles: [],
  projects: [],
  sides: [],
})

export const mutations = {
  repos(state, repos) {
    state.repos = repos
  },
  articles(state, repos) {
    state.articles = repos
  },
  projects(state, repos) {
    state.projects = repos
  },
  sides(state, repos) {
    state.sides = repos
  },
}
