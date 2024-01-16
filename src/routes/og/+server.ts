import { ImageResponse } from '$lib/index.js';
import Card from './Card.svelte';
import Noto from './noto-sans-v27-latin-regular.ttf';

export async function GET({ url, fetch }) {
	const title =
		url.searchParams.get('title') || 'missing `title` in URL query string. e.g., /og?title=example';

	const response = await fetch(Noto);
	const font = await response.arrayBuffer();

	return new ImageResponse(
		Card,
		{ title },
		{
			fonts: [
				{
					name: 'Noto Sans',
					data: Buffer.from(font),
					weight: 600,
					style: 'normal'
				}
			]
		}
	);
}
