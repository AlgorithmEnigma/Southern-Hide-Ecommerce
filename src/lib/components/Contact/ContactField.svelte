<script lang="ts">
	export let type: string = 'text';
	export let placeholder: string;
	export let value: string;
	export let label: string;

	function handleInputType(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<div class="font-swistblnk flex flex-col text-raisin">
	<input
		class="inputField bg-transparent font-quicksand p-1 border-b-2 border-raisin outline-none bg-[#D7C4A275] focus:border-primary focus:border-b-4"
		use:handleInputType
		{placeholder}
		bind:value
	/>
	<label for="inputField" class="mt-1 text-2xl">{label}</label>
</div>

<style>
	::placeholder {
		color: #000000;
		opacity: 1;
	}
</style>
