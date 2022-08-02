<script lang="ts">
	export let value: string;
</script>

<div class="text-5xl font-swistblnk flex flex-col">
	<label for="inputField">Message</label>
	<input
		class="inputField font-quicksand"
		type="text"
		placeholder="Enter your message here"
		bind:value
	/>
</div>
