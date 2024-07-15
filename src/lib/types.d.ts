import type {
	ImageResponseOptions as VercelOGImageResponseOptions
} from '@vercel/og/types';

import { FontOptions as VercelOGFontOptions } from '@vercel/og/types';

export { EmojiType, SatoriOptions } from '@vercel/og/types';

export type FontOptions = VercelOGFontOptions & object;

export type ImageResponseOptions = VercelOGImageResponseOptions & {
	fonts: [FontOptions, ...FontOptions[]];
};

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
