import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const GET: RequestHandler = async () => {
	try {
		let users = await prisma.users.findMany();
		users = users.map((payment) => ({
			...payment,
			graph: [
				payment.january,
				payment.febuary,
				payment.march,
				payment.april,
				payment.may,
				payment.june,
				payment.july,
				payment.august,
				payment.september,
				payment.october,
				payment.november,
				payment.december
			]
		}));

		return json(users);

		console.log(users);
	} catch (err) {
		return json([]);
		console.error(err);
	}
};
