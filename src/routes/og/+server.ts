import { ImageResponse } from 'svelte-og-image';
import Card from './Card.svelte';
import font from './typewriter.ttf';
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
					name: 'Typewriter',
					data: fontData,
					style: 'normal',
				}
			]
		}
	);
}
