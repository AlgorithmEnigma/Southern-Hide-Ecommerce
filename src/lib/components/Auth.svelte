<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	let loading = false;
	let email: string;

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
		}
	};
</script>

<form class="row flex flex-center" on:submit|preventDefault={handleLogin}>
	<div>
		<h1 class="header">Supabase + Svelte</h1>
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
