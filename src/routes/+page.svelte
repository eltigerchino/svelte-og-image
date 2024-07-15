<script lang="ts">
	import { page } from '$app/stores';

	const page_title = 'Svelte OG Image';

	const og_image = new URL(`/og?title=${page_title}`, $page.url.origin).href;

	let value = page_title;

	$: url = new URL(`/og?title=${value}`, $page.url.origin).href;
</script>

<svelte:head>
	<title>{page_title}</title>
	<meta property="og:title" content={page_title} />
	<meta property="og:image" content={og_image} />
</svelte:head>

<article>
	<h1>{page_title}</h1>

	<label for="title">Title</label>
	<input id="title" name="title" bind:value />

	<a href={url}>View OG image</a>
</article>

<div class="img-placeholder">
	<img src={url} alt="og" />
</div>

<style>
	img {
		width: 100%;
		max-width: 1200px;
		height: auto;
	}

	.img-placeholder {
		margin-top: 1rem;
		background-color: #eee;
	}
</style>
