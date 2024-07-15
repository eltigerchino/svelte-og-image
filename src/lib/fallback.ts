// Thanks to https://geoffrich.net/posts/svelte-social-image/

import { html } from 'satori-html';
import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';
import satori from 'satori';
import { Resvg, initWasm } from '@resvg/resvg-wasm';
import resvgWasmUrl from '@resvg/resvg-wasm/index_bg.wasm?url';
import type { ImageResponseOptions } from '@vercel/og/types';

const DEFAULT_HEIGHT = 630;
const DEFAULT_WIDTH = 1200;

export async function createImageResponse<T extends SvelteComponent>(
	component: ComponentType<T>,
	props: ComponentProps<T>,
	options: Omit<ImageResponseOptions, 'emoji'> & { fetch: typeof fetch }
) {
	// @ts-expect-error - Svelte types are not up to date
	// see https://svelte.dev/docs/server-side-component-api
	const result = (component as SvelteComponentSSR<T>).render(props);
	const element = html(`${result.html}<style>${result.css.code}</style>`);

	const width = options?.width ?? DEFAULT_WIDTH;

	const svg = await satori(element, {
		fonts: options?.fonts || [],
		height: options?.height ?? DEFAULT_HEIGHT,
		width,
		debug: options?.debug
	});

	try {
		new Resvg('<svg xmlns="http://www.w3.org/2000/svg"></svg>');
	} catch {
		await initWasm(await options.fetch(resvgWasmUrl));
	}

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		status: options?.status,
		statusText: options?.statusText,
		headers: {
			'content-type': 'image/png',
			'cache-control': 'public, max-age=0, must-revalidate'
		},
		...options.headers
	});
}
