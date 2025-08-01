import { Resvg } from '@resvg/resvg-js';
import satori, { type FontStyle, type FontWeight } from 'satori';
import { html as toReactNode } from 'satori-html';
import type { Component, ComponentProps } from 'svelte';
import { render } from 'svelte/server';
import { DEV } from 'esm-env';

// taken from https://github.com/sveltejs/svelte.dev/blob/d66890a231e506a2f927125f0cdf7c77a4310653/apps/svelte.dev/src/routes/blog/%5Bslug%5D/card.png/%2Bserver.ts#L4

const DEFAULT_HEIGHT = 630;
const DEFAULT_WIDTH = 1200;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ImageResponse<TComponent extends Component<any>> extends Response {
	constructor(
		component: TComponent,
		props: ComponentProps<TComponent>,
		options: {
			fonts: {
				name: string;
				data: ArrayBuffer;
				style: FontStyle;
				weight: FontWeight;
			}[];
			/** @default 630 */
			height?: number;
			/** @default 1200 */
			width?: number;
			headers?: Record<string, string>;
		}
	) {
		if (DEV && !component.toString().includes('$$payload.css.add($$css);')) {
			throw new Error(
				'Missing `<svelte:options css="injected" />` in the component. The option must be set to inject CSS into the image response.'
			);
		}

		// @ts-expect-error what the heck is the problem??
		const result = render(component, { props });

		const element = toReactNode(`<head>${result.head}</head>${result.body}`);

		const renderTask = satori(element, {
			fonts: options.fonts,
			height: options.height ?? DEFAULT_HEIGHT,
			width: options.width ?? DEFAULT_WIDTH
		}).then((svg) => {
			const resvg = new Resvg(svg, {
				fitTo: {
					mode: 'width',
					value: options.width ?? DEFAULT_WIDTH
				}
			});
			const image = resvg.render();
			return image.asPng();
		});

		super(
			new ReadableStream({
				start(controller) {
					renderTask
						.then((pngBuffer) => {
							controller.enqueue(pngBuffer);
							controller.close();
						})
						.catch((error) => {
							controller.error(error);
						});
				}
			}),
			{
				headers: {
					'content-type': 'image/png',
					// cache for 10 minutes
					'cache-control': 'public, max-age=600',
					...(options.headers ?? {})
				}
			}
		);
	}
}
