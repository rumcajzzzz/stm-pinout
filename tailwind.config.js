// tailwind.config.js
module.exports = {
	theme: {
	  extend: {
		keyframes: {
		  'placeholder-fade': {
			'0%': { opacity: 0, transform: 'translateY(5px)' },
			'10%': { opacity: 1, transform: 'translateY(0)' },
			'90%': { opacity: 1, transform: 'translateY(0)' },
			'100%': { opacity: 0, transform: 'translateY(-5px)' },
		  }
		},
		animation: {
		  'placeholder-fade': 'placeholder-fade 2.5s ease-in-out infinite',
		}
	  }
	}
  }