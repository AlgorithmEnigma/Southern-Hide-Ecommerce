<script>
	// Import SVG Icons
	import MenuIcon from '$lib/components/svg/MenuIcon.svelte';
	import SearchIcon from '$lib/components/svg/SearchIcon.svelte';
	import UserIcon from '$lib/components/svg/UserIcon.svelte';
	import ShoppingBagIcon from '$lib/components/svg/ShoppingBagIcon.svelte';

	import NavMenu from '$lib/components/NavMenu.svelte';

	import { openModal } from 'svelte-modals';
	import LoginModal from './LoginModal.svelte';

	// Supabase helper
	import { supabase } from '$lib/utils/supabaseClient';

	export let isOpen = false;

	function closeMenu() {
		isOpen = !isOpen;
	}

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

<NavMenu {isOpen} on:closeMenu={closeMenu} />

<div class="fixed w-full h-36 flex flex-row justify-between items-center">
	<div class="flex flex-row w-[10vw] justify-between items-center">
		<div class="nav-menu ml-[3vw]">
			<!-- TODO: Add nav menu -->
			<button
				on:click={() => {
					isOpen = !isOpen;
				}}
			>
				<MenuIcon tailwindClasses="svg-sm" />
			</button>
		</div>
		<a href="/"><h2 class="font-swistblnk text-logo">SHC</h2></a>
	</div>

	<!-- TODO: Change color on non index page -->
	<div class="flex flex-row mr-[3vw] justify-between w-[30vw]">
		<div class="flex flex-row">
			<div class="search mr-[5vw]"><SearchIcon tailwindClasses="svg-sm text-background" /></div>
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
				<div class="user mr-[5vw]"><UserIcon tailwindClasses="svg-sm text-background" /></div>
			</button>
		</div>
		<div class="checkout mr-[5vw]">
			<ShoppingBagIcon tailwindClasses="svg-sm text-background" />
		</div>
	</div>
</div>
