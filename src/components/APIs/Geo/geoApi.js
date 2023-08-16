export const geoApiOptions = { 
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${import.meta.env.VITE_GEO_KEY}`,
		'X-RapidAPI-Host': `${import.meta.env.VITE_GEO_URL}`,
	},
};
export const geoApiUrl = `${import.meta.env.VITE_GEO_URL}/v1/geo/cities`;

