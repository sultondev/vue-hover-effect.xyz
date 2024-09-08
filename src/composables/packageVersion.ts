import { useFetch } from '#app';

export const usePackageVersion = (packageName: string) => {
	const versionUrl = `https://registry.npmjs.org/${packageName}/latest`;

	const { data, error } = useFetch(versionUrl, {
		method: 'GET',
		key: 'package-version',
	});

	return {
		full: data.value || null,
		version: data.value?.version || 'unknown',
		error: error.value,
	};
};
