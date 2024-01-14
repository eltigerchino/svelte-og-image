<!-- Thanks to https://geoffrich.net/posts/svelte-social-image/ -->
<script lang="ts">
	export let title: string;
</script>

<div class="card">
	<h1>{title}</h1>
</div>

<style>
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
</style>
