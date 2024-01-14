# svelte-og-image

A simple wrapper around [`@vercel/og`](https://www.npmjs.com/package/@vercel/og) for use in Svelte projects. Just import your Svelte component and pass in values to its props.

## Installation

```bash
pnpm i -D svelte-og-image
```

## Usage

If you're using [SvelteKit](https://kit.svelte.dev), create an API route that exposes a GET function. Then, import the `renderOGImage` method and the Svelte component you wish to render as an image.

```ts
// src/routes/og/+server.js
import { renderOGImage } from 'svelte-og-image';
import Card from '$lib/Card.svelte';

export function GET() {
  return renderOGImage<Card>(Card, { title: 'Hello world!' });
}
```

> [!WARNING]
> Certain CSS features such as CSS variables and `display: grid;` are not compatible with Satori.
> Read the [Satori documentation](https://github.com/vercel/satori#css) for more info.

## Acknowledgements

A special thanks to [Geoff Rich](https://geoffrich.net) for breaking this down in his excellent [blog post](https://geoffrich.net/posts/svelte-social-image/). Many of his blog posts have helped me when I first started learning Svelte in 2022 for my studies.
