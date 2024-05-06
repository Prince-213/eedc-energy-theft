import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { userRegisterSchema } from '$lib/zod/schema';
import { fail } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const load = (async () => {
	return {
		form: await superValidate(zod(userRegisterSchema))
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	register: async ({ request }) => {
		const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));
		await sleep(4000);
		const form = await superValidate(request, zod(userRegisterSchema));

		console.log(form);

		// Convenient validation check:
		if (!form.valid) {
			// Always return { form } and things will just work.
			return fail(400, { form });
		}

		try {
			// Example usage
			const payments = [
				form.data.january,
				form.data.february,
				form.data.march,
				form.data.april,
				form.data.may,
				form.data.june,
				form.data.july,
				form.data.august,
				form.data.september,
				form.data.october,
				form.data.november,
				form.data.december
			];

			const isEnergyTheftSuspect = (payments: number[]) => {
				const minMonthlyAmount = 4000;
				const consecutiveMonthsThreshold = 3; // Threshold for consecutive months without payment
				const lowPaymentFactor = 0.4; // Factor to consider payments significantly lower than historical average

				let consecutiveMonthsWithoutPayment = 0;
				let sumOfPayments = 0;
				let historicalAverage = 0;

				for (const payment of payments) {
					sumOfPayments += payment;

					if (payment === 0) {
						consecutiveMonthsWithoutPayment++;
					} else {
						if (consecutiveMonthsWithoutPayment > consecutiveMonthsThreshold) {
							// User stayed a period of months without paying
							return true;
						}
						consecutiveMonthsWithoutPayment = 0;
					}
				}

				// Calculate historical average
				historicalAverage = sumOfPayments / payments.length;

				// Check for low payments compared to historical average
				for (const payment of payments) {
					if (payment < historicalAverage * lowPaymentFactor) {
						return true;
					}
				}

				// Check if the total sum of payments is consistently lower than expected minimum amount
				if (sumOfPayments < minMonthlyAmount * payments.length) {
					return true;
				}

				return false;
			}

			await prisma.users.create({
				data: {
					name: form.data.name,
					meter: form.data.meterno,
					address: form.data.address,
					status: isEnergyTheftSuspect(payments) ? 'suspect' : 'Non Suspect',
					january: form.data.january,
					febuary: form.data.february,
					march: form.data.march,
					april: form.data.april,
					may: form.data.may,
					june: form.data.june,
					july: form.data.july,
					august: form.data.august,
					september: form.data.september,
					october: form.data.october,
					november: form.data.november,
					december: form.data.december
				}
			});
		} catch (error) {
			console.log(error);
		}

		// TODO: check if username is already used
	}
};
