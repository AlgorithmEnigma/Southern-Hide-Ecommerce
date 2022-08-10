// import type { RequestHandler } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

export async function POST({ request }: { request: Request }) {
	const data = await request.formData();

	const info = {
		firstName: data.get('firstName')?.toString(),
		lastName: data.get('lastName')?.toString(),
		email: data.get('email')?.toString(),
		message: data.get('message')?.toString()
	};

	const msgToHost = {
		to: '', // TODO Change to your host recipient
		from: '', // TODO Change to your verified sender on Production SendGrid account
		subject: 'A customer has sent you a message!',
		text: JSON.stringify(info)
		// html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};

	if (info.email) {
		const msgToGuest = {
			to: info.email,
			from: 'me@jordanlowell.com',
			subject: 'Thanks for reaching out!',
			html: "<h1>Hello from Southern Hide!</h1> \n <p>We're so happy to hear from you!</p> <p>We will get back to you as soon as possible.</p>"
		};

		sgMail
			.send(msgToGuest)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
		return {
			status: 400,
			body: { message: 'Please provide an email address.' }
		};
	}

	sgMail
		.send(msgToHost)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});

	return {
		status: 200,
		body: {
			message: `Message sent`
		}
	};
}
