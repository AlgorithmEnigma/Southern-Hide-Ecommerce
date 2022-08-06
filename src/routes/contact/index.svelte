<script lang="ts">
	import ContactField from '$lib/components/Contact/ContactField.svelte';
	import MessageField from '$lib/components/Contact/MessageField.svelte';

	let firstName: string;
	let lastName: string;
	let email: string;
	// let phone: string;
	let message: string;
	let loading = false;
	let sentEmail = false;

	async function submitContact() {
		loading = true;
		const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('email', email);
		// formData.append('phone', phone);
		formData.append('message', message);
		const response = await fetch('/api/contact', {
			method: 'POST',
			body: formData
		});
		if (response.ok) {
			firstName = '';
			lastName = '';
			email = '';
			// phone = '';
			message = '';
			sentEmail = true;
		}
		loading = false;
	}
</script>

<div class="flex justify-center align-center">
	<h1 class="text-raisin text-subtitle font-swistblnk mt-44">Contact</h1>
</div>

<div class="flex flex-row justify-evenly align-center mt-20">
	<div>
		<p class="text-copy font-swistblnk">
			Want to get in touch? <br /> ask about a custom order? <br /> well here’s the place!
		</p>
	</div>
	<div class="w-2/5">
		{#if !sentEmail}
			<form class="row flex flex-center" on:submit|preventDefault={submitContact}>
				<div>
					<ContactField
						type="text"
						placeholder="Enter your first name"
						bind:value={firstName}
						label="First Name"
					/>
					<ContactField
						type="text"
						placeholder="Enter your last name"
						bind:value={lastName}
						label="Last Name"
					/>
					<ContactField
						type="email"
						placeholder="Enter your email address"
						bind:value={email}
						label="Email"
					/>
					<MessageField bind:value={message} />
					<button type="submit" class="">Submit -></button>
				</div>
			</form>
		{:else}
			<div class="flex flex-center">
				<p class="text-copy font-swistblnk">
					Thank you for your message! <br /> we will get back to you as soon as possible.
				</p>
			</div>
		{/if}
	</div>
</div>
