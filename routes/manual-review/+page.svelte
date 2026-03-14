<!-- Manual Review Module Page -->
<script>
  import { user, vehicleEntries } from "$lib/stores.js";
  import VehicleTable from "$lib/components/VehicleTable.svelte";
  import { goto } from "$app/navigation";

  // Filter only flagged entries
  let flaggedEntries = [];

  vehicleEntries.subscribe((entries) => {
    flaggedEntries = entries.filter((e) => e.status === "Flagged");
  });

  // Redirect to login if not authenticated
  $: if (!$user.isAuthenticated) {
    goto("/");
  }

  const handleResolve = (id) => {
    // Update the flagged entry to cleared
    vehicleEntries.update((entries) =>
      entries.map((e) => (e.id === id ? { ...e, status: "Cleared" } : e)),
    );
  };
</script>

<div class="px-6 py-8 md:px-12">
  <!-- Header -->
  <div class="mb-8">
    <button
      on:click={() => goto("/dashboard")}
      class="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 mb-4"
    >
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to Dashboard
    </button>
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900">Manual Review</h1>
    <p class="text-gray-600 text-lg mt-2">
      Review flagged cases and override decisions.
    </p>
  </div>

  <!-- Stats -->
  <div class="card p-6 md:p-8 mb-8">
    <p class="text-gray-600 text-sm mb-2">Flagged entries pending review</p>
    <p class="text-3xl md:text-4xl font-bold text-red-600">
      {flaggedEntries.length}
    </p>
  </div>

  <!-- Flagged Entries Table -->
  <div class="mb-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Flagged Entries</h2>
    <VehicleTable entries={flaggedEntries} />
  </div>

  <!-- Action Buttons -->
  {#if flaggedEntries.length > 0}
    <div class="card p-8">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">
        Available Actions
      </h3>
      <div class="space-y-3">
        {#each flaggedEntries as entry (entry.id)}
          <div
            class="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
          >
            <div>
              <p class="font-medium text-gray-900">{entry.name}</p>
              <p class="text-sm text-gray-600">{entry.licensePlate}</p>
            </div>
            <button
              on:click={() => handleResolve(entry.id)}
              class="btn-primary text-sm"
            >
              Clear Entry
            </button>
          </div>
        {/each}
      </div>
    </div>
  {:else}
    <div class="card p-8 text-center">
      <div class="text-4xl mb-4">✓</div>
      <p class="text-gray-600 text-lg">No flagged entries at this time.</p>
    </div>
  {/if}
</div>

<style>
</style>
