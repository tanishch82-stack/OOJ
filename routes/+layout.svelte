<!-- Main Layout -->
<script>
	import '$lib/../app.css';
	import { user } from '$lib/stores.js';
	import Navbar from '$lib/components/Navbar.svelte';
	import { goto } from '$app/navigation';

	let isAuthenticated = false;

	user.subscribe((value) => {
		isAuthenticated = value.isAuthenticated;
	});
</script>

{#if isAuthenticated}
	<Navbar />
{/if}

<main class="min-h-screen">
	<slot />
</main>

<style>
</style>
