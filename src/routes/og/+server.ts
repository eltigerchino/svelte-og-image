import { ImageResponse } from '$lib/index.js';
import Card from './Card.svelte';
import Noto from './noto-sans-v27-latin-regular.ttf';

export async function GET({ url, fetch }) {
	let title = url.searchParams.get('title');

	title ??= 'missing `title` in URL query string. e.g., /og?title=example';

	// @ts-expect-error EdgeRuntime is injected by Vercel Edge Function
	const font_url = typeof EdgeRuntime !== 'string' ? Noto : new URL('.' + Noto, import.meta.url);

	const font = await fetch(font_url).then((res) => res.arrayBuffer());

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
