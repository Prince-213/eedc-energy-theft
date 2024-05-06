<script lang="ts">
	import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { ChevronRightSolid, ChevronDownSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';

	type gs = {
		data: number;
		revenue: number;
		calls: number;
		sms: number;
	}[];

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

	let options = {
		chart: {
			height: '360px',
			maxWidth: '120%',
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: true
			},
			toolbar: {
				show: false
			}
		},
		tooltip: {
			enabled: true,
			x: {
				show: true
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: '#5A6ACF',
				gradientToColors: ['#5A6ACF']
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 5
		},
		grid: {
			show: true,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: 0
			}
		},
		series: [
			{
				name: 'Revenue',
				data: [
					month.reduce((acc, currentValue) => acc + currentValue.january, 0),
					month.reduce((acc, currentValue) => acc + currentValue.febuary, 0),
					month.reduce((acc, currentValue) => acc + currentValue.march, 0),
					month.reduce((acc, currentValue) => acc + currentValue.april, 0),
					month.reduce((acc, currentValue) => acc + currentValue.may, 0),
					month.reduce((acc, currentValue) => acc + currentValue.june, 0),
					month.reduce((acc, currentValue) => acc + currentValue.july, 0),
					month.reduce((acc, currentValue) => acc + currentValue.august, 0),
					month.reduce((acc, currentValue) => acc + currentValue.september, 0),
					month.reduce((acc, currentValue) => acc + currentValue.october, 0),
					month.reduce((acc, currentValue) => acc + currentValue.november, 0),
					month.reduce((acc, currentValue) => acc + currentValue.december, 0)
				],
				color: '#5A6ACF'
			}
		],
		xaxis: {
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec'
			],
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false
		}
	};
</script>

<div class=" w-full ">
	<Card class=" border-none shadow-none p-5 bg-[#262d47]" size="lg">
		
		<div class="flex justify-between">
			<div>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">Total Revenue Analysis</p>
			</div>
			<div
				class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500"
			>
				12%
				<ChevronRightSolid class="ms-1 h-3 w-3" />
			</div>
		</div>
		<Chart {options}  />
		<div
			class="mt-5 grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"
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
					Sales Report
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
