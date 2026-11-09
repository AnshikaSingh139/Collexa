export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ice: { DEFAULT: '#EEF2F7', 50: '#F7F9FC', 200: '#DCE3EC' }, aub: { DEFAULT: '#4A1D5C', 700: '#5E2A73', 900: '#2E1039', 100: '#EBDDF1' }, mari: { DEFAULT: '#F5A800', 600: '#D99500', 100: '#FFF1CC' } },
    fontFamily: { sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'] },
    boxShadow: { float: '0 10px 30px -10px rgba(74,29,92,.25)' }
  } },
  plugins: []
}
