# svelte-og-image

A simple wrapper around [`@vercel/og`](https://www.npmjs.com/package/@vercel/og) for use in Svelte projects.

```ts
// src/routes/og/+server.js
import { renderOGImage } from 'svelte-og-image';

// import your Svelte component
import Card from '$lib/Card.svelte';

export function GET() {
	// pass the Svelte component and any props the component accepts
	return renderOGImage<Card>(Card, { title: 'Hello world!' });
}
```

## Acknowledgements

A special thanks to [Geoff Rich](https://geoffrich.net) for breaking this down in his excellent [blog post](https://geoffrich.net/posts/svelte-social-image/). Many of his blog posts have helped me when I first started learning Svelte in 2022 for my studies.
