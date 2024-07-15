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
