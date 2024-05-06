<script lang="ts">
	import logo from '$lib/assets/logos.jpg';
	import { fade } from 'svelte/transition';
	import {
		LayoutDashboardIcon,
		UserIcon,
		ReceiptIcon,
		SettingsIcon,
		LogOutIcon,
		SendIcon,
		PlusCircle
	} from 'lucide-svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	$: pathName = $page.url.pathname;

	type links = {
		title: string;
		icon: any;
		path: string;
	}[];

	const links: links = [
		{
			title: 'Dashboard',
			icon: LayoutDashboardIcon,
			path: '/'
		},
		{
			title: 'Customers',
			icon: UserIcon,
			path: '/artists'
		},

		{
			title: 'Analyze',
			icon: PlusCircle,
			path: '/add'
		}
	];
</script>

<aside transition:fade class=" fixed min-h-full w-[15%] bg-[#262d47]">
	<div class=" flex h-[4rem] border-gray-800 items-center border-b-2">
		<div class=" ml-[12%] flex items-center space-x-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="#5A67BA"
				class="h-6 w-6"
			>
				<path
					d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"
				/>
				<path
					fill-rule="evenodd"
					d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
					clip-rule="evenodd"
				/>
			</svg>

			<h1 class="  font-bold text-[#5A67BA]">Energy Survey</h1>
		</div>
	</div>
	<div class=" mx-auto mt-10 w-[75%] flex-col">
		<h1 class=" mb-4 text-gray-400">Menu</h1>
		<nav class=" space-y-5">
			{#each links as link, idx}
				<button
					on:click={() => goto(link.path)}
					class={` flex w-full rounded-[4px]  px-4 py-3 ${
						pathName == link.path
							? 'bg-[#1b2034] text-[#6ec86e]'
							: 'bg-transparent text-[#5c6682]'
					} items-center space-x-4  transition-all duration-150`}
				>
					<a
						href={link.path}
						data-sveltekit-preload-code="hover"
						class=" flex items-center space-x-4"
					>
						<svelte:component this={link.icon} />
						<p class=" text-base font-medium">{link.title}</p>
					</a>
				</button>
			{/each}
		</nav>
	</div>
</aside>
