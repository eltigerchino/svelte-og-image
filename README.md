# svelte-og-image

A simple wrapper around [`@vercel/og`](https://www.npmjs.com/package/@vercel/og) for use in Svelte projects.
Just import your Svelte component and pass in any props that it accepts.

```ts
// src/routes/og/+server.js
import { renderOGImage } from 'svelte-og-image';
import Card from '$lib/Card.svelte';

export function GET() {
	return renderOGImage<Card>(Card, { title: 'Hello world!' });
}
```

> Note that certain CSS features are not compatible with Satori.
> See https://github.com/vercel/satori#css

## Acknowledgements

A special thanks to [Geoff Rich](https://geoffrich.net) for breaking this down in his excellent [blog post](https://geoffrich.net/posts/svelte-social-image/). Many of his blog posts have helped me when I first started learning Svelte in 2022 for my studies.
