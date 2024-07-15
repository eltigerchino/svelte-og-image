import { ImageResponse } from 'svelte-og-image';
import Card from './Card.svelte';
import font from './Overpass-SemiBold.ttf';
import { read } from '$app/server';

const initFontData = read(font).arrayBuffer();

export async function GET({ url }) {
	let title = url.searchParams.get('title');

	title ??= 'missing `title` in URL query string. e.g., /og?title=example';

	const fontData = await initFontData;

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
