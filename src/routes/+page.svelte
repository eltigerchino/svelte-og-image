<script lang="ts">
	import { page } from '$app/stores';

	const page_title = 'Svelte OG Image';

	const og_image = new URL(`/og?title=${page_title}`, $page.url.origin).href;
</script>

<svelte:head>
	<title>{page_title}</title>
	<meta property="og:title" content={page_title} />
	<meta property="og:image" content={og_image} />
</svelte:head>

<h1>{page_title}</h1>

<a href={og_image}>View the OG image here</a>
