// https://nuxt.com/docs/api/configuration/nuxt-config
// import config from "./config";
// import modules from "~~/config/nuxt-modules";
import Aura from "@primevue/themes/aura"
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: [
	 '@vueuse/nuxt',
	 'nuxt-og-image',
	 '@primevue/nuxt-module',
	 '@nuxtjs/tailwindcss',
	 '@nuxt/icon',
	],
	primevue: {
		options: {
			ripple: true,
			inputVariant: 'filled',
			theme: {
				preset: Aura,
				options: {
					prefix: 'p',
					darkModeSelector: 'system',
					cssLayer: false
				}
			}
		}
	},
	icon: {
		customCollections: [
			{
				size: '24px', // default <Icon> size applied
				class: 'icon',
				prefix: 'my-icon',
				dir: './src/assets/custom-icons'
			},
		],
	},
	srcDir: 'src/',
})