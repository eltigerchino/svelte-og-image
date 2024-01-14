# svelte-og-image

A wrapper around [`@vercel/og`](https://www.npmjs.com/package/@vercel/og) for use in Svelte projects.

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
