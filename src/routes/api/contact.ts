// import type { RequestHandler } from '@sveltejs/kit';

export async function POST({ request }: { request: Request }) {
	const data = await request.formData();
	data.forEach((value) => {
		console.log(value);
	});

	return {
		status: 200,
		body: {
			message: data
		}
	};
}
