<script lang="ts">
	import Header from '$lib/components/Header.svelte';

	export let products: Record<string, unknown>[];
</script>

<svelte:head>
	<title>Southern Hide - Store</title>
</svelte:head>

<Header />

<!-- TODO: Style page -->
<div class="flex justify-center align-center">
	<h1 class="text-raisin text-subtitle font-swistblnk mt-44">Store</h1>
</div>
<div>
	{#each products as product}
		<p>{product.product_name}</p>
		<p>{product.product_price}</p>
		<img src={product.image_url} alt={product.product_name} />
	{/each}
</div>

<!-- TODO: Make Filter component -->
<!-- TODO: Implement Filter functionality -->
<!-- TODO: Make card component -->
