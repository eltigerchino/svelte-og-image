<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const page_title = 'Svelte OG Image';
	const og_image = new URL(`/og?title=${page_title}`, $page.url.origin).href;

	let title = $page.url.searchParams.get('title') || page_title;
	let value = title;

	$: url = new URL(`/og?title=${title}`, $page.url.origin).href;

	function debounce(fn: () => void, ms: number) {
		let timeout: number;
		return () => {
			clearTimeout(timeout);
			timeout = window.setTimeout(fn, ms);
		};
	}

	const submitHandler = debounce(() => {
		title = value;
		goto('?' + new URLSearchParams({ title: value }), {
			replaceState: true,
			keepFocus: true
		});
	}, 500);
</script>

<svelte:head>
	<title>{page_title}</title>
	<meta property="og:title" content={page_title} />
	<meta property="og:image" content={og_image} />
</svelte:head>

<article>
	<h1>{page_title}</h1>

	<form>
		<label for="title">Title</label>
		<input id="title" name="title" bind:value on:input={submitHandler} />
	</form>

	<a href={url}>View OG image</a>
</article>

<div class="img-placeholder">
	<img src={url} alt="og" />
</div>

<style>
	img {
		display: inline-block;
		width: 100%;
		max-width: 1200px;
		height: auto;
	}

	.img-placeholder {
		display: flex;
		width: 100%;
		max-width: 1200px;
		aspect-ratio: 1200 / 630;
		margin-top: 1rem;
		background-color: #eee;
	}
</style>
