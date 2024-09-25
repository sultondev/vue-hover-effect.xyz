export default defineNuxtPlugin((nuxtApp) => {

	const api = $fetch.create({
		baseURL: 'https://registry.npmjs.org',
		method: 'GET',
	})

	// Expose to useNuxtApp().$api
	return {
		provide: {
			api
		}
	}
})
