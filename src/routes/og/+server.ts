import { read } from '$app/server';
// import { ImageResponse } from 'svelte-og-image';
import { ImageResponse } from '$lib/index.js';
import Card from './Card.svelte';
import font from './Overpass-SemiBold.ttf';

const fontData = await read(font).arrayBuffer();

export async function GET({ url }) {
	let title = url.searchParams.get('title');

	title ??= 'missing `title` in URL query string. e.g., /og?title=example';

	return new ImageResponse(
		Card,
		{ title },
		{
			fonts: [
				{
					name: 'Overpass',
					data: fontData,
					style: 'normal',
					weight: 600
				}
			]
		}
	);
}
