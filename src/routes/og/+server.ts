import { renderOGImage } from '$lib/index.js';
import Card from './Card.svelte';

export async function GET({ url }) {
	const title =
		url.searchParams.get('title') || 'missing `title` in URL query string. e.g., /og?title=example';
	return renderOGImage<Card>(Card, { title });
}
