<!-- Border Selection Card Component -->
<script>
	export let title = '';
	export let description = '';
	export let icon = 'truck';
	export let isLocked = false;
	export let isSelected = false;
	export let onClick = () => {};

	const handleClick = () => {
		if (!isLocked) {
			onClick();
		}
	};
</script>

<button
	on:click={handleClick}
	disabled={isLocked}
	class="relative w-full h-48 rounded-xl border-2 transition-all cursor-pointer
		{isSelected
		? 'border-blue-600 bg-blue-50'
		: 'border-gray-300 bg-white hover:border-gray-400'}
		{isLocked ? 'opacity-60 cursor-not-allowed' : ''}"
>
	<!-- Content -->
	<div class="flex flex-col items-center justify-center h-full gap-4 p-6">
		<!-- Icon -->
		<div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
			{#if icon === 'truck'}
				<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
					<path d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5M5 9.5v3h8v-3M4 6h16v9h-2.04l-2-2.5H9v2.5H4z" />
				</svg>
			{:else if icon === 'plane'}
				<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
					<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-2.65-2.05-4.82-4.67-4.82-.29 0-.57.02-.86.07C13.99 3.86 11.92 2 9.38 2 6.35 2 3.8 3.58 2.45 5.92 1 6.02.6 6.25.4 6.54l2.49 1.99c.31-.15.61-.3.86-.52.78-.66 2.06-2.35 3.73-2.35 2.04 0 3.72 1.46 4.11 3.41h.08c3.13 0 5.67 2.54 5.67 5.67 0 .14 0 .29-.01.43l.99.8.99-1.22 1.59 1.3-1.59 1.3-.99-.8L18.92 15c-1.49 1.62-4.62 1.8-5.68 1.8h-.08v3.19l-1.46-1.16.73-.59c-.22-.45-.35-.97-.35-1.52 0-.5.09-.98.27-1.41-1.1.5-1.87 1.5-1.87 2.67 0 1.66 1.34 3 3 3 1.98 0 3.65-1.37 3.96-3.22.29.05.58.08.87.08 2.62 0 4.67-2.17 4.67-4.82 0-1.02-.32-1.97-.87-2.76l.34-.27v.01z" />
				</svg>
			{:else if icon === 'ship'}
				<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 4h5V2h8v2h5V2zm0 3H4v10h16V5zm1 12H3v2h18v-2z" />
				</svg>
			{/if}
		</div>

		<!-- Title -->
		<h3 class="text-lg font-semibold text-gray-800">{title}</h3>

		<!-- Description -->
		<p class="text-sm text-gray-600 text-center">{description}</p>
	</div>

	<!-- Locked Badge -->
	{#if isLocked}
		<div class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-bold">
			LOCKED
		</div>
	{/if}
</button>

<style>
</style>
