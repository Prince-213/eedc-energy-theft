<script lang="ts">
	import { browser } from '$app/environment';
	import '../app.pcss';
	import '../app.pcss';
	import Sidebar from '$lib/components/Sidbar.svelte';
	import { fade } from 'svelte/transition';
	import Loader from '$lib/components/Loader.svelte';
</script>

{#if !browser}
	<Loader />
{:else}
	<div class=" relative flex min-h-screen w-full items-stretch justify-between bg-[#1b2034] font-quick">
		<Sidebar></Sidebar>

		<div class=" w-[12%]"></div>
		<div class=" text-[#8d93a6] min-h-full w-[85%]">
			<slot />
		</div>
	</div>
{/if}
