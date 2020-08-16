/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      fontFamily: {
        ubuntu: 'Ubuntu, sans-serif',
        poppins: 'Poppins, sans-serif',
      },
      colors: {
        dark: 'var(--color-dark)',
        darker: 'var(--color-darker)',
        light: 'var(--color-light)',
        gray: {
          // default: '',
          light: 'var(--color-gray-light)',
        },
        primary: {
          light: 'var(--color-primary-light)',
          default: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
