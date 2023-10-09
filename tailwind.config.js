/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			/* https://colormagic.app/palette/LeyZMmImFOyT4TGDYeIy */
			colors: {
				anzac: '#e09f3e',
				sirocco: '#6f7b78',
				'cloud-burst': '#1e2b43',
				'selective-yellow': '#fab700',
				'swamp-green': '#a3b48e'
			}
		}
	},
	plugins: []
};
