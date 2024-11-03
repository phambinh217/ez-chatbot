export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-replace': {
      pattern: /(--tw|\*, ::before, ::after)/g,
      data: {
        '--tw': '--fc', // Prefixing
        '*, ::before, ::after': ':root', // So variables does not pollute every element
      }
    }
  },
}
