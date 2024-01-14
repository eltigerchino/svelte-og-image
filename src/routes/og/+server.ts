import { ImageResponse } from '$lib/index.js';
import Card from './Card.svelte';

export async function GET({ url }) {
	const title =
		url.searchParams.get('title') || 'missing `title` in URL query string. e.g., /og?title=example';
	return new ImageResponse(Card, { title });
}
