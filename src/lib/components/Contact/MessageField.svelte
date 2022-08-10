<script lang="ts">
	export let value: string;
</script>

<div class="mt-6 font-swistblnk flex flex-col text-raisin">
	<label for="inputField" class="text-2xl">Message</label>
	<textarea
		class="inputField font-quicksand p-3 h-20 bg-[#D7C4A275] border-t-2 border-raisin outline-none focus:border-primary focus:border-t-4"
		placeholder="Enter your message here"
		bind:value
	/>
</div>

<style>
	.inputField {
		box-sizing: border-box;
	}

	::placeholder {
		color: #000000;
		opacity: 1;
	}
</style>
