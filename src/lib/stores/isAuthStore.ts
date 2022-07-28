import { writable } from 'svelte/store';

export const isAuthenticated = writable();

/* SECURITY: Rewite auth to use server-side authentication and store as cookie not localStorage, see
 * https://nikolas.ws/supabase-auth-with-sveltekit/
 *https://github.com/supabase-community/auth-helpers/tree/main/packages/sveltekit
 * https://blog.logrocket.com/jwt-authentication-best-practices/#whyyoushouldnt
 */
