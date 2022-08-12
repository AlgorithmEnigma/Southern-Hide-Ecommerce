<script lang="ts">
	export let tailwindClasses: string;
	export let loggedIn: boolean = false;
</script>

{#if loggedIn}
	<svg
		class={tailwindClasses}
		stroke-width="1.5"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17 10H20M23 10H20M20 10V7M20 10V13"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{/if}
<svg
	class={tailwindClasses}
	stroke-width="1.5"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
