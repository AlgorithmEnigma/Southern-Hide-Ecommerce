<script>
	import '../app.css';
	import { Modals, closeModal } from 'svelte-modals';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/ContactFooter.svelte';
</script>

<svelte:head>
	<title>Southern Hide</title>
</svelte:head>
<body class="bg-background" />

<Modals><div slot="backdrop" class="backdrop" on:click={closeModal} /></Modals>
<Header />
<slot />
<Footer />

<style>
	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
