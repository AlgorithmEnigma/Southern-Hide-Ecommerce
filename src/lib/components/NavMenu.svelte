<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CloseIcon from '$lib/components/svg/CloseIcon.svelte';

	export let isOpen: boolean = false;

	let translate: string;

	$: if (isOpen == false) {
		translate = '-translate-x-full';
	} else {
		translate = 'translate-x-0';
	}

	const dispatch = createEventDispatcher();

	function closeMenu() {
		console.log('Sending close menu event');
		dispatch('closeMenu');
	}
	// let
</script>

<!-- {#if isOpen} -->
<div class="w-full h-full bg-raisin fixed z-10 {translate} transition-transform">
	<button class="text-background m-10 fixed" on:click={closeMenu}
		><CloseIcon tailwindClasses="svg-md" /></button
	>
	<div class="flex justify-center">
		<ol class="mt-20 text-5xl font-swistblnk text-background">
			<li><a href="/">Home</a></li>
			<li><a sveltekit:prefetch href="/products">Products</a></li>
			<li><a href="/">About</a></li>
			<li><a href="/">Contact</a></li>
		</ol>
	</div>
</div>
<!-- {/if} -->

<!-- TODO: Find way to enable/disable scroll when nav menu is open -->
<style>
	li {
		margin-top: 2.5rem;
	}
</style>
