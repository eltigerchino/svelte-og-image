import { ImageResponse } from '$lib/index.js';
import Card from './Card.svelte';
import Overpass from './overpass-v13-latin-600.ttf';

export async function GET({ url, fetch }) {
	let title = url.searchParams.get('title');

	title ??= 'missing `title` in URL query string. e.g., /og?title=example';

	const font = await fetch(Overpass).then((res) => res.arrayBuffer());

	return new ImageResponse(
		Card,
		{ title },
		{
			fonts: [
				{
					name: 'Overpass',
					data: Buffer.from(font),
					weight: 600,
					style: 'normal'
				}
			]
		}
	);
}
