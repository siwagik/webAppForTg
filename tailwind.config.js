/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				'fade-out-up': {
					'0%': { opacity: 1, transform: 'translateY(0)' },
					'100%': { opacity: 0, transform: 'translateY(-20px)' },
				},
				moveStar: {
					'0%': { transform: 'translate(-50%, -50%) translate(0%, 0%)' },
					'100%': {
						transform: 'translate(-50%, -50%) translate(100vw, 100vh)',
					},
				},
			},
			animation: {
				'fade-out-up': 'fade-out-up 1s ease-in-out forwards',
				'move-star': 'moveStar 3s linear infinite',
			},
		},
	},
	plugins: [],
}
