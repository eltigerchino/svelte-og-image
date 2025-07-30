<!-- Thanks to https://geoffrich.net/posts/svelte-social-image/ -->

<!-- required to get the css during SSR -->
<svelte:options css="injected" />

<script lang="ts">
	import logo from './svelte-logo.svg?raw';

	let { title } = $props<{ title: string }>();
</script>

<div class="card">
	{#if title}
		<h1>{title}</h1>
	{/if}
	<div class="logo">
		<!-- eslint-disable-next-line svelte/no-at-html-tags we know the content is safe -->
		{@html logo}
	</div>
</div>

<style>
	@font-face {
		font-family: 'Overpass';
		font-style: normal;
		font-weight: 600;
		src: url('./Overpass-SemiBold.ttf') format('truetype');
	}

	.card {
		display: flex; /** required by satori */
		flex-direction: column;
		font-size: 50px;
		background-color: #ff3e00;
		color: #fff;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 48px;
	}

	h1 {
		font-family: 'Overpass';
		margin-bottom: 0;
	}

	.logo {
		background-color: #fff;
		padding: 1rem;
		border-radius: 100%;

		/* variables are not supported */
		/* --size: 100px;
		width: var(--size);
		height: var(--size); */
		width: 150px;
		height: 150px;

		/** grid is not supported */
		/* display: grid;
		place-content: center; */

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
