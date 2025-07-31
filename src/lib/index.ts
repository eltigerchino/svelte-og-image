import type { Component, ComponentProps } from 'svelte';
import { html } from 'satori-html';
import { ImageResponse as VercelOGImageResponse } from '@vercel/og';
import type { ImageResponseOptions } from './types.js';
import { render } from 'svelte/server';
import { DEV } from 'esm-env';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ImageResponse<TComponent extends Component<any>> extends VercelOGImageResponse {
	constructor(
		component: TComponent,
		props: ComponentProps<TComponent>,
		options: ImageResponseOptions
	) {
		if (DEV && !component.toString().includes('$$payload.css.add($$css);')) {
			throw new Error(
				'Missing `<svelte:options css="injected" />` in the component. The option must be set to inject CSS into the image response.'
			);
		}
		// @ts-expect-error what the heck is the problem??
		const result = render(component, { props });
		const element = html(`${result.body}${result.head}`);

		super(element, options);
	}
}
