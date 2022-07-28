<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { supabase } from '$lib/utils/supabaseClient';
	import { isAuthenticated } from '$lib/stores/isAuthStore';

	supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_IN') {
			console.log('SIGNED_IN', session);
			isAuthenticated.set(true);
			console.log($isAuthenticated);
		}
	});

	supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_OUT') {
			console.log('SIGNED_OUT', session);
			isAuthenticated.set(false);
			console.log($isAuthenticated);
		}
	});
</script>

<svelte:head>
	<title>Southern Hide Creations</title>
</svelte:head>

<Header />
<!-- TODO: Make responsive -->

<div class="hero grid grid-cols-10 grid-rows-6">
	<div class="col-span-8 col-end-10 row-span-full z-1 ml-[10rem] mt-[15rem]">
		<h1 class="font-swistblnk text-title text-raisin ">
			SouTheRn HidE <span class="text-background relative align-[-10rem]">CReaTioNs</span>
		</h1>
		<hr />
		<h2 class="font-quicksand text-subtitle text-raisin ml-[2.5rem]">Handmade Leather Goods</h2>
	</div>
	<div class="img bg-raisin h-screen col-span-4 col-end-11 row-span-full -z-10" />
</div>

<!-- TODO: Make footer component -->
<style>
	hr {
		border: none;
		height: 1rem;
		width: 40vw;
		margin-left: 1.5rem;
		margin-top: -12rem;
		overflow: visible;
		border-top: 0.4rem solid #606c38;
	}
</style>
