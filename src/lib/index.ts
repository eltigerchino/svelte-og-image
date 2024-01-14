// Thanks to https://geoffrich.net/posts/svelte-social-image/

import { ImageResponse, type ImageResponseOptions } from '@vercel/og';
import { html } from 'satori-html';
import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';

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
	css: { code: string; map: null };
	head: string;
}

export function renderOGImage<T extends SvelteComponent>(
	component: ComponentType<T>,
	props: ComponentProps<T>,
	options?: ImageResponseOptions
) {
	// @ts-expect-error - Svelte types are not up to date
	// see https://svelte.dev/docs/server-side-component-api
	const result = (component as SvelteComponentSSR<T>).render(props);

	// Thanks to https://github.com/natemoo-re/satori-html
	const element = html(`${result.html}<style>${result.css.code}</style>`);

	// Thanks to https://github.com/vercel/satori
	return new ImageResponse(element, options);
}
