<script lang="ts">
	import Auth from '$lib/components/Auth.svelte';

	export let isOpen: boolean = false;
	export let title: string | undefined;
	export let isSignedIn: boolean;
</script>

{#if isOpen}
	<div class="modal">
		<div class="contents">
			<h2>{title}</h2>
			<Auth {isSignedIn} />
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		pointer-events: none;
	}

	.contents {
		min-width: 240px;
		border-radius: 6px;
		padding: 16px;
		background: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;
	}

	h2 {
		text-align: center;
		font-size: 24px;
	}
</style>
