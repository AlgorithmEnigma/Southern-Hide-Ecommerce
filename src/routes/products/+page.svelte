<script lang="ts">
	import { supabase } from '$lib/utils/supabaseClient';
	import Header from '$lib/components/Header.svelte';
	import type { PageData, Errors } from './$types';

	export let data: PageData;
	let { products } = data;
	let images: Record<string, any> = [];

	async function getImages() {
		let imageArray: string[] = [];
		products.forEach(async (product) => {
			const { publicURL, error } = await supabase.storage
				.from('product-images')
				.getPublicUrl(`${product.product_slug}/${product.product_slug}-01.webp`);
			if (publicURL) {
				imageArray.push(publicURL);
			}
		});
		// console.log(imageArray);
		return imageArray;
	}

	$: getImages().then((data) => {
		images = data;
	});
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
	{#each products as product, index}
		<p>{product.product_name}</p>
		<p>{product.product_price}</p>

		<img src={images[index]} alt={product.product_name} />
	{/each}
</div>

<!-- TODO: Make Filter component -->
<!-- TODO: Implement Filter functionality -->
<!-- TODO: Make card component -->
