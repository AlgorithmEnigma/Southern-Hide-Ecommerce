<script>
	import { UserCheckIcon, SearchIcon, UserIcon, ShoppingCartIcon } from 'svelte-feather-icons';
	import { openModal } from 'svelte-modals';
	import LoginModal from './LoginModal.svelte';

	// Supabase helper
	import { supabase } from '$lib/utils/supabaseClient';

	function handleLoginModal() {
		if (supabase.auth.session()) {
			console.log('User is already authenticated');
			openModal(LoginModal, { title: supabase.auth.user()?.email, isSignedIn: true });
		} else {
			console.log('User is not authenticated');
			openModal(LoginModal, { title: 'Login', isSignedIn: false });
		}
	}
</script>

<div class="fixed w-full h-36 flex flex-row justify-between items-center">
	<div class="flex flex-row w-[10vw] justify-between items-center">
		<div class="nav-menu ml-[3vw]">
			<!-- TODO: Add nav menu -->
			<a href="/products">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="75px"
					height="75px"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="1.2px"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-align-left"
					><line x1="17" y1="10" x2="3" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line
						x1="21"
						y1="14"
						x2="3"
						y2="14"
					/><line x1="17" y1="18" x2="3" y2="18" /></svg
				>
			</a>
		</div>
		<a href="/"><h2 class="font-swistblnk text-logo">SHC</h2></a>
	</div>

	<!-- TODO: Change color on non index page -->
	<div class="flex flex-row mr-[3vw] justify-between w-[30vw]">
		<div class="flex flex-row">
			<div class="search mr-[5vw]"><SearchIcon size="60" class="text-background" /></div>
			<!-- {#if $userStore}
				<a href="/profile">
					<div class="user mr-[5vw]"><UserCheckIcon size="60" class="text-background" /></div>
				</a>
			{:else}
				<a href="/login">
					<div class="user mr-[5vw]"><UserIcon size="60" class="text-background" /></div>
				</a>
			{/if} -->

			<button on:click={handleLoginModal}>
				<div class="user mr-[5vw]"><UserIcon size="60" class="text-background" /></div>
			</button>
		</div>
		<div class="checkout mr-[5vw]"><ShoppingCartIcon size="60" class="text-background" /></div>
	</div>
</div>
