<script>
	import { AlignLeftIcon, SearchIcon, UserIcon, ShoppingCartIcon } from 'svelte-feather-icons';
</script>

<div class="fixed w-full h-36 bg-secondary flex flex-row justify-between items-center">
	<div class="nav-menu ml-[3vw]">
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
	</div>
	<div class="flex flex-row mr-[3vw] justify-between w-[30vw]">
		<div class="flex flex-row">
			<div class="search mr-[5vw]"><SearchIcon size="60" class="text-background" /></div>
			<div class="user mr-[5vw]"><UserIcon size="60" class="text-background" /></div>
		</div>
		<div class="checkout mr-[5vw]"><ShoppingCartIcon size="60" class="text-background" /></div>
	</div>
</div>
