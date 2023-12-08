module.exports = {
  content: ['./src/**/*.{html,ts}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  safelist: ['bg-blue-400', 'bg-green-400', 'bg-red-400'],
  theme: {
    extend: {},
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    hover: ({after}) => after(['disabled'])
  },
  plugins: [],
}
