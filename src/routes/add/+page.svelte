<script lang="ts">
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';

	import { ListPlaceholder } from 'flowbite-svelte';

	import { Button } from '$lib/components/ui/button';

	import { Loader2 } from 'lucide-svelte';
	import { GithubLogo, NotionLogo } from 'svelte-radix';

	import { superForm } from 'sveltekit-superforms';

	import { toast } from 'svelte-sonner';

	import { Toaster } from '$lib/components/ui/sonner';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import type { PageData } from './$types.js';
	import { userRegisterSchema, userLoginSchema } from '$lib/zod/schema';
	import SuperDebug from 'sveltekit-superforms';
	import { Field, Control, Description, FieldErrors, Fieldset, Legend } from 'formsnap';

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(userRegisterSchema)
	});
	const { form: formData } = form;

	import { Label } from '$lib/components/ui/label';

	import { Input } from '$lib/components/ui/input';
	import { Skeleton } from '$lib/components/ui/skeleton';

	import { cn } from '$lib/utils';
	import { applyAction, enhance } from '$app/forms';
	import { error } from '@sveltejs/kit';
	import { invalidateAll } from '$app/navigation';

	let className: string | undefined | null = undefined;
	export { className as class };

	let loading = false;

	let isLoading = false;
	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
		}, 3000);
	}
</script>

{#if $navigating}
	<ListPlaceholder />
{:else}
	<Toaster />
	<div
		class="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0"
	>
		<div class="lg:p-6">
			<div class="mx-auto flex w-full flex-col items-center justify-center space-y-6 sm:w-[350px]">
				<div class="flex flex-col space-y-2 text-center">
					<h1 class="text-2xl font-semibold tracking-tight">Analyze a Customer</h1>
					<p class="text-sm text-muted-foreground">
						Fill in the fields below to analyze the customer
					</p>
				</div>
				<div class={cn('grid gap-6', className)} {...$$restProps}>
					<Toaster richColors position="bottom-right" />

					<form
						action="?/register"
						use:enhance={({ formElement, formData, action, cancel, submitter }) => {
							loading = true;

							//toast.loading('Creating Article...');

							// `formElement` is this `<form>` element
							// `formData` is its `FormData` object that's about to be submitted
							// `action` is the URL to which the form is posted
							// calling `cancel()` will prevent the submission
							// `submitter` is the `HTMLElement` that caused the form to be submitted

							return async ({ result, update }) => {
								applyAction(result);
								update();

								loading = false;

								applyAction(result);
								invalidateAll();
								if (result.type === 'success') {
									toast.success('User Profile Analyzed Sucessfully.');
								} else {
									toast.error('Error in analyzing.');
								}
								// `result` is an `ActionResult` object
								// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
							};
						}}
						class=" w-[50em]"
						method="POST"
					>
						<div class=" grid grid-cols-3 gap-8">
							<div class="">
								<Field {form} name="name">
									<Control let:attrs>
										<Label class=" text-base font-medium">Customer Name</Label>
										<Input
											class=" h-12 "
											placeholder="Enter your username"
											{...attrs}
											type="text"
											bind:value={$formData.name}
										/>
									</Control>
									<!-- <Description>Company email is preferred</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div>
								<Field {form} name="meterno">
									<Control let:attrs>
										<Label class=" text-base font-medium">Meter No.</Label>
										<Input
											class=" h-12"
											placeholder="Enter the customers meter no"
											{...attrs}
											type="text"
											bind:value={$formData.meterno}
										/>
									</Control>
									<!-- <Description>Company email is preferred</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="address">
									<Control let:attrs>
										<Label class=" text-base font-medium">Address</Label>
										<Input
											class=" h-12"
											placeholder="Enter the customers address"
											{...attrs}
											type="text"
											bind:value={$formData.address}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="january">
									<Control let:attrs>
										<Label class=" text-base font-medium">January</Label>
										<Input
											class=" h-12"
											placeholder="Jan. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.january}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="february">
									<Control let:attrs>
										<Label class=" text-base font-medium">February</Label>
										<Input
											class=" h-12"
											placeholder="Feb. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.february}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="march">
									<Control let:attrs>
										<Label class=" text-base font-medium">March</Label>
										<Input
											class=" h-12"
											placeholder="Mar. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.march}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="april">
									<Control let:attrs>
										<Label class=" text-base font-medium">April</Label>
										<Input
											class=" h-12"
											placeholder="Apr. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.april}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="may">
									<Control let:attrs>
										<Label class=" text-base font-medium">May</Label>
										<Input
											class=" h-12"
											placeholder="May. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.may}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="june">
									<Control let:attrs>
										<Label class=" text-base font-medium">June</Label>
										<Input
											class=" h-12"
											placeholder="Jun. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.june}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="july">
									<Control let:attrs>
										<Label class=" text-base font-medium">July</Label>
										<Input
											class=" h-12"
											placeholder="Jul. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.july}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="august">
									<Control let:attrs>
										<Label class=" text-base font-medium">August</Label>
										<Input
											class=" h-12"
											placeholder="Aug. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.august}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="september">
									<Control let:attrs>
										<Label class=" text-base font-medium">September</Label>
										<Input
											class=" h-12"
											placeholder="Sep. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.september}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="october">
									<Control let:attrs>
										<Label class=" text-base font-medium">October</Label>
										<Input
											class=" h-12"
											placeholder="Oct. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.october}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="november">
									<Control let:attrs>
										<Label class=" text-base font-medium">November</Label>
										<Input
											class=" h-12"
											placeholder="Nov. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.november}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
							<div class=" ">
								<Field {form} name="december">
									<Control let:attrs>
										<Label class=" text-base font-medium">December</Label>
										<Input
											class=" h-12"
											placeholder="Dec. Payment"
											{...attrs}
											type="number"
											bind:value={$formData.december}
										/>
									</Control>
									<!-- <Description>Tell us a bit about yourself.</Description> -->
									<FieldErrors class=" text-red-500" />
								</Field>
							</div>
						</div>

						<Button
							disabled={loading}
							class=" mx-auto mt-4 w-[30%] translate-x-[120%] gap-x-2 px-4 py-4 text-base  font-medium"
							type="submit"
						>
							{#if loading}
								<Loader2 class=" h-5 w-5 animate-spin text-black" />
							{/if}
							Submit</Button
						>
						<SuperDebug data={$formData} />
					</form>

					<!-- <form on:submit|preventDefault={onSubmit}>
	<div class="grid gap-2">
		<div class="grid gap-1">
			<Label class="sr-only" for="email">Email</Label>
			<Input
				id="email"
				placeholder="name@example.com"
				type="email"
				autocapitalize="none"
				autocomplete="email"
				autocorrect="off"
				disabled={isLoading}
			/>
		</div>
		<Button disabled={isLoading}>
			{#if isLoading}
				<Loader2 class="mr-2 h-4 w-4 animate-spin" />
			{/if}
			Sign In with Email
		</Button>
	</div>
</form> -->
				</div>
			</div>
		</div>
	</div>
{/if}
