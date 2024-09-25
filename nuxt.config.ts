// https://nuxt.com/docs/api/configuration/nuxt-config
// import config from "./config";
// import modules from "~~/config/nuxt-modules";
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: [
	  '@vueuse/nuxt',
	  'nuxt-primevue',
	  '@nuxtjs/tailwindcss',
	  '@nuxt/icon',
	  '@pinia/nuxt',
	  '@nuxtjs/i18n',
	],
	primevue: {
		cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
	},
	css: [
		'primevue/resources/themes/aura-light-green/theme.css'
	],
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
	tailwindcss: {
		cssPath: ['~/styles/tailwind.css', { injectPosition: "last" }],
		configPath: 'config/tailwind.config.ts',
		exposeConfig: {
			level: 2
		},
		config: {},
		viewer: true,
	},
	srcDir: 'src/',
})