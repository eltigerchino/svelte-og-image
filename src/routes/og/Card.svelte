<!-- Thanks to https://geoffrich.net/posts/svelte-social-image/ -->
<script lang="ts">
	import logo from './svelte-logo.svg?raw';

	export let title: string;
</script>

<div class="card">
	<h1>{title}</h1>
	<div class="logo">
		<!-- eslint-disable-next-line svelte/no-at-html-tags we know the content is safe -->
		{@html logo}
	</div>
</div>

<style>
	@font-face {
		font-family: 'Typewriter';
		font-style: normal;
		src: url('./typewriter.ttf') format('truetype');
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
	}

	h1 {
		font-family: 'Typewriter';
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
