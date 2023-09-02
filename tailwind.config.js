/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-bar': 'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
      },
      backgroundGradientColors: {
        'bar': 'var(--gradient-bar)' // Replace with your gradient values
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans'],
      },
      backgroundColor: {
        'bg': '#040C18',
        'footer': '#031B34',
        'blog': '#042c54',
        'gradient-text': 'linear-gradient(to right, #FFA500, #FF4500)',
      },
      textColor: {
        'text': '#81AFDD',
        'subtext': '#FF8A71',
      },
      backgroundClip: {
        'text': 'text',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
      },
      linearGradientColors: {
        'gradient-text': ['#AE67FA', '#F49867'],
      },
      colors: {
        footer: '#031B34',
        'custom-color': 'var(--color-text)', // Custom color variable
      },
      spacing: {
        '4rem': '4rem',
      },
      variants: {
        extend: {},
      },
    },
  },
  plugins: [

  ],
 
};

