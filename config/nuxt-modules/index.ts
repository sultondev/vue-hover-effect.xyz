import type {NuxtConfig} from "@nuxt/schema";

const modules: NuxtConfig['modules'] = [
	'@primevue/nuxt-module',
	'@vueuse/nuxt',
	'nuxt-og-image',
	'@nuxtjs/tailwindcss',
];

export default modules;