import type {NuxtConfig} from "@nuxt/schema";
import modules from './nuxt-modules'

const config: NuxtConfig = {
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules,
	srcDir: 'src/',
}


export default config