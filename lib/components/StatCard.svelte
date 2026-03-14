<!-- Statistics Card Component -->
<script>
	export let label = '';
	export let value = '';
	export let unit = '';
</script>

<div class="card p-6 md:p-8">
	<p class="text-gray-600 text-sm md:text-base font-medium mb-2">{label}</p>
	<p class="text-3xl md:text-4xl font-bold text-gray-900">
		{value}<span class="text-2xl md:text-3xl ml-1">{unit}</span>
	</p>
</div>

<style>
</style>
