<script lang="ts">
	import { page } from '$app/stores'
	import { navigating } from '$app/stores';

	export let data;


	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch,
		
		ListPlaceholder
	} from 'flowbite-svelte';
	import { onMount } from 'svelte';
	let searchTerm = '';

	type Payments = {
    name: string
    meter: string,
    month: string,
    amount: number,
    address: string	
	};

	let items = $page.data.info;

	items.sort(( a: Payments, b: Payments ) => {
		const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		return months.indexOf(a.month) - months.indexOf(b.month)
	})

	$: filteredItems = items?.filter(
		(item: Payments) => item.meter.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
</script>

{#if $navigating}
	<ListPlaceholder />
{:else}
	<div class=" ">
		<div class=" relative w-full p-20">
			


			<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
				<TableHead>
					<TableHeadCell>ID</TableHeadCell>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell>Meter No.</TableHeadCell>
					<TableHeadCell>Unit Purchased</TableHeadCell>
					<TableHeadCell>Month</TableHeadCell>
					<TableHeadCell>Cost of Unit Purchased</TableHeadCell>
					
				</TableHead>
				<TableBody tableBodyClass=" divide-y">
					{#each filteredItems as item, idx}
						<TableBodyRow>
							<TableBodyCell>{idx}</TableBodyCell>
							<TableBodyCell>{item.name}</TableBodyCell>
							<TableBodyCell>{item.meter}</TableBodyCell>
							<TableBodyCell>{item.amount / 25}</TableBodyCell>
							<TableBodyCell class=" capitalize">{item.month}</TableBodyCell>
							<TableBodyCell>₦ {item.amount.toLocaleString('en', {
								notation: 'compact',
								compactDisplay: 'short'
							})}</TableBodyCell>
						</TableBodyRow>
					{/each}
				</TableBody>
			</TableSearch>
		</div>
	</div>
{/if}
