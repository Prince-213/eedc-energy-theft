<script lang="ts">
	import { page } from '$app/stores';
	import type Payments from '$lib/types/payments';
	import { Chart, Card } from 'flowbite-svelte';
	import { UserGroupSolid, ArrowUpSolid } from 'flowbite-svelte-icons';

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

	let month: Payments = $page.data.info;

	const options = {
		colors: ['#5A6ACF'],
		series: [
			{
				name: 'Units Sold',
				color: '#5A6ACF',
				data: [
					{ x: 'Jan', y: month.reduce((acc, currentValue) => acc + currentValue.january, 0) },
					{ x: 'Feb', y: month.reduce((acc, currentValue) => acc + currentValue.febuary, 0) },
					{ x: 'Mar', y: month.reduce((acc, currentValue) => acc + currentValue.march, 0) },
					{ x: 'Apr', y: month.reduce((acc, currentValue) => acc + currentValue.april, 0) },
					{ x: 'May', y: month.reduce((acc, currentValue) => acc + currentValue.may, 0) },
					{ x: 'Jun', y: month.reduce((acc, currentValue) => acc + currentValue.june, 0) },
					{ x: 'Juy', y: month.reduce((acc, currentValue) => acc + currentValue.july, 0) },
					{ x: 'Aug', y: month.reduce((acc, currentValue) => acc + currentValue.august, 0) },
					{ x: 'Sep', y: month.reduce((acc, currentValue) => acc + currentValue.september, 0) },
					{ x: 'Oct', y: month.reduce((acc, currentValue) => acc + currentValue.october, 0) },
					{ x: 'Nov', y: month.reduce((acc, currentValue) => acc + currentValue.november, 0) },
					{ x: 'Dec', y: month.reduce((acc, currentValue) => acc + currentValue.december, 0) }
				]
			}
		],
		chart: {
			type: 'bar',
			height: '320px',
			width: '100%',
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '80%',
				borderRadiusApplication: 'end',
				borderRadius: 5
			}
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontFamily: 'Inter, sans-serif'
			}
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1
				}
			}
		},
		stroke: {
			show: true,
			width: 1,
			colors: ['transparent']
		},
		grid: {
			show: true,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: -14
			}
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: true
		},
		xaxis: {
			floating: true,
			labels: {
				show: true,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
				}
			},
			axisBorder: {
				show: true
			},
			axisTicks: {
				show: true
			}
		},
		yaxis: {
			show: false
		},
		fill: {
			opacity: 1
		}
	};
</script>

<div class=" w-full py-6">
	<Card class=" bg-[#262d47] p-6 border-none shadow-none min-w-full  ">
		<div class="w-full max-w-sm ">
			<div class="mb-4 flex justify-between  border-gray-200 pb-4 ">
				<div class="flex items-center">
					<div
						class="me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
					>
						<svg
							class="h-6 w-6 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 19"
						>
							<path
								d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
							/>
							<path
								d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"
							/>
						</svg>
					</div>
					<div>
						<h5 class="pb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">3.4k</h5>
						<p class="text-sm font-normal text-gray-500 dark:text-gray-400">
							Leads generated per week
						</p>
					</div>
				</div>
				<div>
					<span
						class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
					>
						<svg
							class="me-1.5 h-2.5 w-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13V1m0 0L1 5m4-4 4 4"
							/>
						</svg>
						42.5%
					</span>
				</div>
			</div>

			<div class="grid grid-cols-2">
				<dl class="flex items-center">
					<dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Money spent:</dt>
					<dd class="text-sm font-semibold text-gray-900 dark:text-white">₦3,232</dd>
				</dl>
				<dl class="flex items-center justify-end">
					<dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Conversion rate:
					</dt>
					<dd class="text-sm font-semibold text-gray-900 dark:text-white">1.2%</dd>
				</dl>
			</div>

			<div id="column-chart"></div>
			
		</div>

		<Chart {options} />

		<div
				class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"
			>
				<div class="flex items-center justify-between pt-5">
					<!-- Button -->
					<button
						id="dropdownDefaultButton"
						data-dropdown-toggle="lastDaysdropdown"
						data-dropdown-placement="bottom"
						class="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						type="button"
					>
						Last 7 days
						<svg
							class="m-2.5 ms-1.5 w-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>
					<!-- Dropdown menu -->
					<div
						id="lastDaysdropdown"
						class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
					>
						<ul
							class="py-2 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdownDefaultButton"
						>
							<li>
								<a
									href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>Yesterday</a
								>
							</li>
							<li>
								<a
									href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>Today</a
								>
							</li>
							<li>
								<a
									href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>Last 7 days</a
								>
							</li>
							<li>
								<a
									href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>Last 30 days</a
								>
							</li>
							<li>
								<a
									href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>Last 90 days</a
								>
							</li>
						</ul>
					</div>
					<a
						href="#"
						class="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-blue-600 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-blue-500 dark:focus:ring-gray-700"
					>
						Leads Report
						<svg
							class="ms-1.5 h-2.5 w-2.5 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 6 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 9 4-4-4-4"
							/>
						</svg>
					</a>
				</div>
			</div>
	</Card>
</div>
