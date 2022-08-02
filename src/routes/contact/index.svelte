<script lang="ts">
	import sendgrid from '@sendgrid/mail';

	import ContactField from '$lib/components/Contact/ContactField.svelte';
	import MessageField from '$lib/components/Contact/MessageField.svelte';

	let firstName: string;
	let lastName: string;
	let email: string;
	let phone: string;
	let message: string;
	let loading = false;

	async function submitContact() {
		console.log(email);
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
		<form class="row flex flex-center" on:submit|preventDefault={submitContact}>
			<div>
				<ContactField
					type="text"
					placeholder="Enter your first name"
					bind:value={firstName}
					label="First Name"
				/>
				<ContactField
					type="email"
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
	</div>
</div>
