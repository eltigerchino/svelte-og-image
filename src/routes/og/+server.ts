import { ImageResponse } from 'svelte-og-image';
import Card from './Card.svelte';
import font from './overpass-latin-600.woff2';
import { read } from '$app/server';

export async function GET({ url }) {
	let title = url.searchParams.get('title');

	title ??= 'missing `title` in URL query string. e.g., /og?title=example';

	const fontData = await read(font).arrayBuffer();

	return new ImageResponse(
		Card,
		{ title },
		{
			fonts: [
				{
					name: 'Overpass',
					data: fontData,
					weight: 600,
					style: 'normal'
				}
			]
		}
	);
}
