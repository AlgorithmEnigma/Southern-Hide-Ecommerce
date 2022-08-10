<script>
	import { MailIcon } from 'svelte-feather-icons';
	import { page } from '$app/stores';
</script>

{#if $page.routeId !== 'contact'}
	<div class="fixed sm:w-1/2 bottom-10 left-10">
		<a
			href="/contact"
			class="text-raisin font-swistblnk sm:text-1xl lg:text-5xl flex flex-row justify-evenly items-center"
			><MailIcon class="text-raisin mr-2" />Custom Order? Get in Touch!</a
		>
	</div>
{/if}

<style>
</style>
