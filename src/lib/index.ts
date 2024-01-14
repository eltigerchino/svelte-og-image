// Thanks to https://geoffrich.net/posts/svelte-social-image/

import { ImageResponse as VercelOGImageResponse } from '@vercel/og';
import { html } from 'satori-html';
import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';
import type { ImageResponseOptions } from './types.js';

// https://svelte.dev/docs/typescript#types

export interface SvelteComponentSSR<T extends SvelteComponent> {
	render: (
		props: ComponentProps<T>
		// TODO: find out what these options are
		// options?: { $$slots: SvelteSlots; context: Map<any, any> }
	) => SvelteRenderResult;
}

export interface SvelteRenderResult {
	html: string;
	css: {
		code: string;
		// TODO: what is css.map for???
		map: null;
	};
	head: string;
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
