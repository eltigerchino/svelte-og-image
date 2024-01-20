# svelte-og-image

A simple wrapper around [`@vercel/og`](https://www.npmjs.com/package/@vercel/og) for use in [Svelte](https://svelte.dev) projects. Just import your Svelte component and pass in values to its props.

## Installation

```bash
pnpm i -D svelte-og-image
```

## Usage

If you're using [SvelteKit](https://kit.svelte.dev), create an API route that exposes a GET function. Then, import the `ImageResponse` class and the Svelte component you wish to render as an image.

```js
// src/routes/og/+server.js
import { ImageResponse } from 'svelte-og-image';
import Card from './Card.svelte';

export function GET () {
 const response = await fetch('/overpass-v13-latin-600.woff');
 const data = await response.arrayBuffer();

 return new ImageResponse(
  Card,
  { title },
  {
   fonts: [
    {
     name: 'Overpass',
     data,
     weight: 600,
     style: 'normal'
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

A special thanks to [Geoff Rich](https://geoffrich.net) for breaking this down in his excellent [blog post](https://geoffrich.net/posts/svelte-social-image/). Many of his blog posts have helped me when I first started learning Svelte in 2022 for my studies.

* [satori-html](https://github.com/natemoo-re/satori-html)
* [satori](https://github.com/vercel/satori)
