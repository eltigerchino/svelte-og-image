import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';
import { html } from 'satori-html';
import { ImageResponse as VercelOGImageResponse } from '@vercel/og';
import type { ImageResponseOptions } from './types.js';

function include() {
	import('./noto-sans-v27-latin-regular.ttf')
}

export class ImageResponse<T extends SvelteComponent> extends VercelOGImageResponse {
	constructor(
		component: ComponentType<T>,
		props: ComponentProps<T>,
		options?: ImageResponseOptions
	) {
		// @ts-expect-error - Svelte types are not up to date
		// see https://svelte.dev/docs/server-side-component-api
		const result = (component as SvelteComponentSSR<T>).render(props);
		const element = html(`${result.html}<style>${result.css.code}</style>`);
		super(element, options);
	}
}
