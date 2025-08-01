# svelte-og-image

Generate an OG image using your Svelte component.

## Installation

```bash
pnpm i -D svelte-og-image
```

## Usage

If you're using [SvelteKit](https://kit.svelte.dev), create an API route that exposes a GET function. Then, import the `ImageResponse` class and the Svelte component you wish to render as an image. The Svelte component you use must have the injected CSS option `<svelte:options css="injected" />` so that the renderer can retrieve the injected styles. See this [example component](./src/routes/og/Card.svelte) to learn more.

```js
// src/routes/og/+server.js
import { read } from '$app/server';
import { ImageResponse } from 'svelte-og-image';
import Card from './Card.svelte';
import font from './Overpass-SemiBold.ttf';

const fontData = await read(font).arrayBuffer();

export async function GET() {
	return new ImageResponse(
		Card,
		{ title: 'Hello world!' },
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
```

> [!WARNING]
> Certain CSS features such as CSS variables and `display: grid;` are not compatible with Satori.
> Read the [Satori documentation](https://github.com/vercel/satori#css) for more info.

## Acknowledgements

Implementation taken from [svelte.dev](https://github.com/sveltejs/svelte.dev/blob/d66890a231e506a2f927125f0cdf7c77a4310653/apps/svelte.dev/src/routes/blog/%5Bslug%5D/card.png/%2Bserver.ts#L4).

A special thanks to [Geoff Rich](https://geoffrich.net) for breaking this down in his excellent [blog post](https://geoffrich.net/posts/svelte-social-image/). Many of his blog posts have helped me when I first started learning Svelte in 2022 for my studies.

- [satori-html](https://github.com/natemoo-re/satori-html)
- [satori](https://github.com/vercel/satori)
- [@resvg/resvg-js](https://github.com/thx/resvg-js)
