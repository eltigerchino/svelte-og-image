// we have to redeclare the types from @vercel/og because they are not exported
declare const apis: {
	twemoji: (code: any) => string;
	openmoji: string;
	blobmoji: string;
	noto: string;
	fluent: (code: any) => string;
	fluentFlat: (code: any) => string;
};
export declare type EmojiType = keyof typeof apis;
export declare type ImageResponseOptions = ImageOptions & ConstructorParameters<typeof Response>[1];
declare type ImageOptions = {
	/**
	 * The width of the image.
	 *
	 * @type {number}
	 * @default 1200
	 */
	width?: number;
	/**
	 * The height of the image.
	 *
	 * @type {number}
	 * @default 630
	 */
	height?: number;
	/**
	 * Display debug information on the image.
	 *
	 * @type {boolean}
	 * @default false
	 */
	debug?: boolean;
	/**
	 * A list of fonts to use.
	 *
	 * @type {{ data: ArrayBuffer; name: string; weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900; style?: 'normal' | 'italic' }[]}
	 * @default Noto Sans Latin Regular.
	 */
	fonts?: SatoriOptions['fonts'];
	/**
	 * Using a specific Emoji style. Defaults to `twemoji`.
	 *
	 * @link https://github.com/vercel/og#emoji
	 * @type {EmojiType}
	 * @default 'twemoji'
	 */
	emoji?: EmojiType;
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
