import { supabase } from '$lib/utils/supabaseClient';
import type { PostgrestError } from '@supabase/supabase-js';
import { redirect } from '@sveltejs/kit';

// Set products
let products: Record<string, unknown>[] | null;

// GET http endpoint
export async function load() {
	// Try to get products from supabase, error if not
	try {
		const { data, error } = await supabase
			.from('Products')
			.select('product_name, product_slug, product_price');
		if (error) throw error;

		products = data;
	} catch (error: unknown) {
		console.error('Error retrieving products: ', (error as PostgrestError).message);
	}

	if (products) {
		// console.log('Products: ', products);

		return { products: products };
	} else {
		throw redirect(503, 'Unable to retrieve products');
	}
}
