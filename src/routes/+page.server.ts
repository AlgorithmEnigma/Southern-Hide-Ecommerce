import { browser } from '$app/env';
import { supabase } from '$lib/utils/supabaseClient';

if (!browser) {
	console.log('not browser');
}
