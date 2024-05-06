import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	type Payments = {
		name: string;
		meter: string;
		january: number;
		febuary: number;
		march: number;
		april: number;
		may: number;
		june: number;
		july: number;
		august: number;
		september: number;
		october: number;
		november: number;
		december: number;
		address: string;
		status: string;
		graph: number[];
	}[];

	const response = await fetch('/api/payments');
	const data: Payments = await response.json();

	return {
		info: data
	};
}) satisfies PageServerLoad;
