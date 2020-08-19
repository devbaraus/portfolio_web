export function langToIcon(name) {
  name = name.toLowerCase()
  if (name === 'html') return 'html5'
  if (name === 'nuxt') return 'nuxtjs'
  if (name === 'node') return 'nodejs'
  if (name === 'css') return 'css3'
  if (name === 'c++') return 'cplusplus'
  if (name === 'vue') return 'vuejs'
  return name.replace(' ', '-')
  // if (name === 'html') return 'html5'
  // if (name === 'html') return 'html5'
  // if (name === 'html') return 'html5'
  // if (name === 'html') return 'html5'
}
