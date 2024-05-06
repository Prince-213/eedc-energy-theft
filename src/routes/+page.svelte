<script lang="ts">
	import profile from '$lib/assets/karsten-winegeart-uNVjLyA3xu8-unsplash.jpg';
	// @ts-ignore
	import { AlertCircle, BellIcon, CheckCheckIcon, ListFilterIcon } from 'lucide-svelte';

	import {
		Avatar,
		WidgetPlaceholder,
		Skeleton,
		Table,
		Card,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import Chart from '$lib/components/Chart.svelte';
	import Radar from '$lib/components/Radar.svelte';
	import Line from '$lib/components/Line.svelte';
	import { navigating } from '$app/stores';

	import { page } from '$app/stores';
	import UserChart from '$lib/components/UserChart.svelte';
	import { slide } from 'svelte/transition';

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

	let payments: Payments = $page.data.info; 

	let suspects = payments.filter((item) => item.status == 'suspect');

	export let data;

	let { brief } = data;

	const calcSum = (i: number[]) => {
		let sum = 0;

		for (let index = 0; index < i.length; index++) {
			sum += i[index];
		}

		return sum;
	};

	const calcAverage = (i: number[]) => {
		let sum = calcSum(i);

		return sum / i.length;
	};

	let searchTerm: string = 'suspect';

	$: filteredItems = brief?.filter((item) => item.status.indexOf(searchTerm.toLowerCase()) !== -1);
</script>

{#if $navigating}
	<div class=" space-y-8">
		<Skeleton />
		<WidgetPlaceholder />
	</div>
{:else}
	<div
		class=" flex h-[4rem] w-full items-center justify-between border-b-2 border-gray-800 px-[2rem]"
	>
		<h1 class=" font-bold text-[#5A67BA]"></h1>
		<div class=" flex items-center space-x-6">
			<div class=" flex items-center space-x-4">
				<div
					class="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600"
				>
					<span class="font-medium text-gray-600 dark:text-gray-300">JL</span>
				</div>
				<p>Admin</p>
			</div>

			<button
				type="button"
				class="relative inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#979797" class="h-6 w-6">
					<path
						fill-rule="evenodd"
						d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
						clip-rule="evenodd"
					/>
				</svg>

				<span class="sr-only">Notifications</span>
				<div
					class="absolute -end-0 top-0 inline-flex h-3 w-3 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900"
				></div>
			</button>
		</div>
	</div>
	<div class=" mx-auto mt-10 w-[95%]">
		<div class="  flex w-full flex-col space-y-10">
			<div class=" ">
				<h1 class=" text-lg font-medium">Dashboard</h1>
			</div>
			<div class=" grid w-full grid-cols-3 gap-6">
				<div class=" col-span-2 min-h-[50vh] w-full ">
					<h1 class=" pl-6 text-lg font-medium">Revenue</h1>
					<Line />
				</div>
				<div class=" min-h-[50vh] pt-[3em] w-full">
					<Radar suspect={suspects.length} non_suspect={payments.length - suspects.length} />
				</div>
				<div class="  col-span-2 min-h-[50vh]  w-full ">
					<Table color="custom" customeColor="#262d47" divClass=" bg-red-400"  class="  bg-red-400 py-8">
						<TableHead theadClass=" bg-[#262d47]"  class="">
							<TableHeadCell>Meter No.</TableHeadCell>
							<TableHeadCell>Name</TableHeadCell>
							<TableHeadCell>Average Amount</TableHeadCell>
							<TableHeadCell>Total Amount</TableHeadCell>
							<TableHeadCell>No. Payments</TableHeadCell>
							<TableHeadCell>Status</TableHeadCell>
						</TableHead>
						<TableBody  tableBodyClass="divide-y bg-[#262d47]">
							{#each filteredItems as item, i}
								<TableBodyRow>
									<TableBodyCell>{item.meter}</TableBodyCell>
									<TableBodyCell>{item.name}</TableBodyCell>
									<TableBodyCell>{Math.floor(calcAverage(item.graph))}</TableBodyCell>
									<TableBodyCell>{calcSum(item.graph)}</TableBodyCell>
									<TableBodyCell>{item.graph.length}</TableBodyCell>
									<TableBodyCell>
										{#if item.status == 'suspect'}
											<button
												class=" flex items-center space-x-2 rounded-full border-2 border-red-500 px-4 py-2 text-red-500"
											>
												<AlertCircle />
												<h4>Suspect</h4>
											</button>
										{:else}
											<button
												class=" flex items-center space-x-2 rounded-full border-2 border-green-500 px-4 py-2 text-green-500"
											>
												<CheckCheckIcon />
												<h4>Non Suspect</h4>
											</button>
										{/if}
									</TableBodyCell>
								</TableBodyRow>
							{/each}
						</TableBody>
					</Table>
				</div>

				<div class=" min-h-[50vh] w-full ">
					<Chart />
				</div>
			</div>
		</div>
	</div>
{/if}
