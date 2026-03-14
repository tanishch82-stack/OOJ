<!-- Navbar Component -->
<script>
	import { user, borderType } from '$lib/stores.js';

	const handleSignOut = () => {
		user.set({
			isAuthenticated: false,
			id: null,
			name: null
		});
		borderType.set(null);
		window.location.href = '/';
	};
</script>

<nav class="bg-white bg-opacity-80 backdrop-blur-sm shadow-md py-4 px-6 flex justify-between items-center">
	<!-- Left Section: Logo & Border Type -->
	<div class="flex items-center gap-4">
		<!-- Logo / Shield Icon -->
		<div class="flex items-center gap-2">
			<div class="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
				<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2L4 7v7c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z" />
				</svg>
			</div>
			<span class="text-lg font-bold text-gray-800">BCS Terminal</span>
		</div>

		<!-- Border Type Badge -->
		{#if $borderType}
			<div class="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm font-semibold flex items-center gap-2">
				<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
					{#if $borderType === 'Land'}
						<path d="M18 8h-1V7c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H6c-2.76 0-5 2.24-5 5v8c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-8c0-2.76-2.24-5-5-5zm-9-1h6v1H9V7zm9 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
					{:else if $borderType === 'Air'}
						<path d="M15 3v13H5V3m6 14c0 .6.4 1 1 1s1-.4 1-1h4c0 1.7-1.3 3-3 3s-3-1.3-3-3H9z" />
					{:else if $borderType === 'Sea'}
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
					{/if}
				</svg>
				{$borderType}
			</div>
		{/if}
	</div>

	<!-- Right Section: Sign Out -->
	<button
		on:click={handleSignOut}
		class="text-gray-600 hover:text-gray-800 font-medium transition-colors"
	>
		Sign Out
	</button>
</nav>

<style>
</style>
