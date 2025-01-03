/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    './src/**/*.{html,js,jsx,ts,tsx}',
    "./index.html",
    './node_modules/flowbite/**/*.js', // Include Flowbite components
  ],
    
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        black: 'rgba(0, 0, 0, 0.5)', // Custom dark overlay
      },
    },
    screens: {
      sm: '640px',
      md: '768px', // Ensure this matches your expectations
      lg: '1024px',
    },
  },
  plugins: [
    require('flowbite/plugin') // Add Flowbite as a Tailwind plugin
  ],
  important: true,
}

