import { supabase } from '$lib/utils/supabaseClient';
import type { PostgrestError } from '@supabase/supabase-js';

// Set products
let products: Record<string, unknown>[] | null;

// GET http endpoint
export async function GET() {
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

	// Get product image url from supabase, then map to products array
	const productsMapped = products?.map(async (product) => {
		const { publicURL, error } = await supabase.storage
			.from('product-images')
			.getPublicUrl(`${product.product_slug}/${product.product_slug}-01.webp`);
		if (error) throw error;
		return {
			product_name: product.product_name,
			product_slug: product.product_slug,
			product_price: product.product_price,
			image_url: publicURL
		};
	});

	if (products) {
		productsMapped?.forEach(async (product, index) => {
			product.then((value) => {
				if (products != null) {
					products[index] = value;
				}
			});
		});
	}

	// If the products exist return 200 status and body with the products
	if (products) {
		return {
			status: 200,
			headers: {},
			body: { products }
		};
	}
	return {
		status: 404
	};
}
