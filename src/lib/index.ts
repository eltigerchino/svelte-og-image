import type { Component, ComponentProps } from 'svelte';
import { html } from 'satori-html';
import { ImageResponse as VercelOGImageResponse } from '@vercel/og';
import type { ImageResponseOptions } from './types.js';
import { render } from 'svelte/server';
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ImageResponse<TComponent extends Component<any>> extends VercelOGImageResponse {
	constructor(
		component: TComponent,
		props: ComponentProps<TComponent>,
		options: ImageResponseOptions
	) {
		// @ts-expect-error what the heck is the problem??
		const result = render(component, { props });
		const element = html(`${result.body}${result.head}`);

		super(element, options);
	}
}
