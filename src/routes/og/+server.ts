import { ImageResponse } from '$lib/index.js';
import Card from './Card.svelte';

export async function GET({ url, fetch }) {
	const title =
		url.searchParams.get('title') || 'missing `title` in URL query string. e.g., /og?title=example';
	const response = await fetch('/overpass-v13-latin-600.woff');
	const overpass = await response.arrayBuffer();
	return new ImageResponse(
		Card,
		{ title },
		{ fonts: [{ name: 'Overpass', data: Buffer.from(overpass), weight: 600, style: 'normal' }] }
	);
}
