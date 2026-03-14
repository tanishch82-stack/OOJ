<!-- Vehicle Entries Table Component -->
<script>
	export let entries = [];
</script>

<div class="card overflow-x-auto">
	<table class="w-full">
		<thead>
			<tr class="border-b border-gray-200">
				<th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
				<th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">License Plate</th>
				<th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
			</tr>
		</thead>
		<tbody>
			{#each entries as entry (entry.id)}
				<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
					<td class="px-6 py-4 text-sm text-gray-800">{entry.name}</td>
					<td class="px-6 py-4 text-sm text-gray-600">{entry.licensePlate}</td>
					<td class="px-6 py-4 text-sm">
						{#if entry.status === 'Cleared'}
							<span class="flex items-center gap-2 text-green-600">
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
								</svg>
								Cleared
							</span>
						{:else if entry.status === 'Flagged'}
							<span class="flex items-center gap-2 text-red-600">
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
								</svg>
								Flagged
							</span>
						{:else}
							<span class="text-gray-600">{entry.status}</span>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
</style>
