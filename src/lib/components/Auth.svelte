<script lang="ts">
	import { supabase } from '$lib/utils/supabaseClient';
	import { closeModal } from 'svelte-modals';

	let loading = false;
	let email: string;
	export let isSignedIn: boolean;

	console.log(isSignedIn);

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error: any) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
			closeModal();
		}
	};

	const handleLogout = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			alert("You've been logged out.");
		} catch (error: any) {
			alert(error.error_description || error.message);
		} finally {
			closeModal();
		}
	};
</script>

{#if isSignedIn}
	<div>
		<button type="button" on:click={handleLogout}>Sign out</button>
	</div>
{:else}
	<form class="row flex flex-center" on:submit|preventDefault={handleLogin}>
		<div>
			<p>Sign in via magic link with your email below</p>
			<div>
				<input class="inputField" type="email" placeholder="Your email" bind:value={email} />
			</div>
			<div
				type="submit"
				class="button block"
				value={loading ? 'Loading' : 'Send magic link'}
				disabled={loading}
			/>
		</div>
	</form>
{/if}
