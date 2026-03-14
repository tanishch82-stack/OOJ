<!-- Module Selection Card Component -->
<script>
	export let title = '';
	export let description = '';
	export let icon = 'entry';
	export let onClick = () => {};
</script>

<button
	on:click={onClick}
	class="card p-6 md:p-8 text-center hover:shadow-lg transition-all transform hover:scale-105"
>
	<!-- Icon -->
	<div class="flex justify-center mb-4">
		{#if icon === 'entry'}
			<div class="w-12 h-12 md:w-16 md:h-16 text-blue-600">
				<svg fill="currentColor" viewBox="0 0 24 24">
					<path d="M9 3C5.68 3 3 5.68 3 9v6c0 3.32 2.68 6 6 6h6c3.32 0 6-2.68 6-6V9c0-3.32-2.68-6-6-6H9zm0 2h6c2.25 0 4 1.75 4 4v6c0 2.25-1.75 4-4 4H9c-2.25 0-4-1.75-4-4V9c0-2.25 1.75-4 4-4z" />
				</svg>
			</div>
		{:else if icon === 'exit'}
			<div class="w-12 h-12 md:w-16 md:h-16 text-blue-600">
				<svg fill="currentColor" viewBox="0 0 24 24">
					<path d="M16 18l2.29-2.29-4.71-4.71 4.71-4.71L16 6l-6 6z" />
				</svg>
			</div>
		{:else if icon === 'review'}
			<div class="w-12 h-12 md:w-16 md:h-16 text-blue-600">
				<svg fill="currentColor" viewBox="0 0 24 24">
					<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
				</svg>
			</div>
		{/if}
	</div>

	<!-- Title -->
	<h3 class="text-lg md:text-xl font-semibold text-gray-800 mb-2">{title}</h3>

	<!-- Description -->
	<p class="text-sm md:text-base text-gray-600">{description}</p>
</button>

<style>
</style>
