export function langToIcon(name) {
  if (name === 'HTML') return 'html5'
  if (name === 'CSS') return 'css3'
  if (name === 'C++') return 'cplusplus'
  return name.toLowerCase().replace(' ', '-')
  // if (name === 'html') return 'html5'
  // if (name === 'html') return 'html5'
  // if (name === 'html') return 'html5'
  // if (name === 'html') return 'html5'
}
