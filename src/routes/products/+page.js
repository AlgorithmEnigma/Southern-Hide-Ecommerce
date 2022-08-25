export async function load({ data: props }) {
	const products = props.products;

	return {
		products: products
	};
}
