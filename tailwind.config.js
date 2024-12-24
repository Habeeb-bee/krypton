/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(94.78deg, #FFFFFF 1.7%, rgba(255, 255, 255, 0.44) 100.26%)",
        'community-btn': " linear-gradient(95.46deg, #FFFFFF 0%, rgba(255, 255, 255, 0.51) 101.07%)",
        'ellipse': "rgba(252, 245, 173, 0.25)"

        
      },

      animation: {
        'fade-in': 'fade-in 1.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

     
      fontFamily: {
        'Epilogue': ['Nunito Sans']
      }


    },

    screens: {
      'nsm': '370px',
      'xsm': '340px',
      'tablet': '640px',
      'laptop': '1024px',
      
      

    },

   
  },
  plugins: [],
}