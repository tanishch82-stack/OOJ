<!-- Login Page -->
<script>
	import { user, borderType } from '$lib/stores.js';
	import { goto } from '$app/navigation';

	let officerId = '';
	let password = '';
	let error = '';
	let loading = false;

	const handleLogin = async () => {
		error = '';
		if (!officerId.trim()) {
			error = 'Officer ID is required';
			return;
		}
		if (!password) {
			error = 'Password is required';
			return;
		}

		loading = true;
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (officerId && password) {
			user.set({
				isAuthenticated: true,
				id: officerId,
				name: 'Officer ' + officerId
			});
			await goto('/border-select');
		} else {
			error = 'Invalid credentials';
		}
		loading = false;
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleLogin();
		}
	};
</script>

<div class="min-h-screen flex items-center justify-center px-4">
	<div class="w-full max-w-md">
		<!-- Card -->
		<div class="card p-8 md:p-12">
			<!-- Logo -->
			<div class="flex justify-center mb-8">
				<div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
					<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2L4 7v7c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z" />
					</svg>
				</div>
			</div>

			<!-- Title -->
			<h1 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">Secure Access</h1>
			<p class="text-center text-gray-600 mb-8">Digital Border Control System</p>

			<!-- Form -->
			<form on:submit|preventDefault={handleLogin} class="space-y-6">
				<!-- Officer ID Field -->
				<div>
					<label for="officer-id" class="block text-sm font-medium text-gray-700 mb-2">
						Officer ID
					</label>
					<input
						id="officer-id"
						type="text"
						bind:value={officerId}
						placeholder="BCS-00000"
						on:keypress={handleKeyPress}
						class="input-field"
					/>
				</div>

				<!-- Password Field -->
				<div>
					<label for="password" class="block text-sm font-medium text-gray-700 mb-2">
						Password
					</label>
					<input
						id="password"
						type="password"
						bind:value={password}
						on:keypress={handleKeyPress}
						class="input-field"
					/>
				</div>

				<!-- Error Message -->
				{#if error}
					<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
						{error}
					</div>
				{/if}

				<!-- Authenticate Button -->
				<button
					type="submit"
					disabled={loading}
					class="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
					</svg>
					{loading ? 'Authenticating...' : 'Authenticate'}
				</button>
			</form>
		</div>
	</div>
</div>

<style>
</style>
