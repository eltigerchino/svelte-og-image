<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	const PAGE_TITLE = 'Svelte OG Image';

	let title = $state(page.url.searchParams.get('title') ?? PAGE_TITLE);
	const url = $derived(
		`/og?title=${encodeURIComponent(page.url.searchParams.get('title') ?? PAGE_TITLE)}`
	);

	function debounce(fn: () => void, ms: number) {
		let timeout: number;
		return () => {
			clearTimeout(timeout);
			timeout = window.setTimeout(fn, ms);
		};
	}

	const handleInput = debounce(() => {
		goto('?' + new URLSearchParams({ title }), {
			replaceState: true,
			keepFocus: true
		});
	}, 500);
</script>

<svelte:head>
	<title>{PAGE_TITLE}</title>
	<meta
		name="description"
		content="Generate dynamic Open Graph images for your Svelte applications with customizable titles and social media previews."
	/>
	<meta
		name="keywords"
		content="svelte, open graph, og image, social media, meta tags, dynamic images, sveltekit, web development, social sharing, preview cards"
	/>
	<meta property="og:title" content={PAGE_TITLE} />
	<meta property="og:image" content={new URL(`/og?title=${PAGE_TITLE}`, page.url.origin).href} />
</svelte:head>

<article>
	<h1>svelte-og-image</h1>

	<p>Dynamically create images using Svelte components. <a href="https://github.com/eltigerchino/svelte-og-image">GitHub Repository</a></p>

	<form>
		<label for="title">Title:</label>
		<input id="title" name="title" bind:value={title} oninput={handleInput} />
	</form>
</article>

<div class="img-placeholder">
	<img src={url} alt="og preview" />
</div>

<a href={url} class="view-og">View OG image</a>

<style>
	.img-placeholder {
		display: flex;
		width: 100%;
		max-width: 1200px;
		aspect-ratio: 1200 / 630;
		margin-top: 12px;
		background-color: #eee;
	}

	img {
		display: inline-block;
		width: 100%;
		max-width: 1200px;
		height: auto;
	}

	.view-og {
		display: inline-block;
		margin-top: 12px;
	}
</style>
