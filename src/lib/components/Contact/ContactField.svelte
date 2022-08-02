<script lang="ts">
	export let type: string = 'text';
	export let placeholder: string;
	export let value: string;
	export let label: string;

	function handleInputType(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<div class="text-5xl font-swistblnk flex flex-col">
	<input class="inputField font-quicksand" use:handleInputType {placeholder} bind:value />
	<label for="inputField">{label}</label>
</div>
