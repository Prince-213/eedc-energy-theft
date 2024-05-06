/* eslint-disable prefer-const */
import type { PageServerLoad } from './$types';


export const load = (async ({ fetch }) => {
	let suspect = ['john', 'ken'];

	let non_suspect = ['john', 'ken', 'troy'];

	// Function to convert the format
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

	let response = await fetch('/api/payments');
	let brief: Payments = await response.json();

	return {
		
		suspect: suspect ?? [],
		non_suspect: non_suspect ?? [],
		brief: brief ?? []
	};
}) satisfies PageServerLoad;
