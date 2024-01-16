<!-- Thanks to https://geoffrich.net/posts/svelte-social-image/ -->
<script lang="ts">
	import logo from './svelte-logo.svg?raw';

	export let title: string;
</script>

<div class="card">
	<h1>{title}</h1>
	<div class="logo">
		{@html logo}
	</div>
</div>

<style>
	@font-face {
		font-family: 'Overpass';
		font-style: normal;
		font-weight: 600;
		src: url('./overpass-v13-latin-600.ttf') format('truetype');
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
		font-family: 'Overpass';
		font-weight: 600;
	}

	.logo {
		background-color: #fff;
		padding: 1rem;
		border-radius: 100%;

		/* CSS variables are not allowed */
		/* --size: 100px;
		width: var(--size);
		height: var(--size); */
		width: 150px;
		height: 150px;

		/** grid is not allowed */
		/* display: grid;
		place-content: center; */

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
