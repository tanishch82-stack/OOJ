<!-- Entry Control Module Page -->
<script>
  import { user } from "$lib/stores.js";
  import { goto } from "$app/navigation";

  let processedCount = 0;

  // Redirect to login if not authenticated
  $: if (!$user.isAuthenticated) {
    goto("/");
  }

  const handleProcessVehicle = () => {
    processedCount++;
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
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900">Entry Control</h1>
    <p class="text-gray-600 text-lg mt-2">
      Inbound traveler processing and vehicle screening.
    </p>
  </div>

  <!-- Stats -->
  <div class="card p-6 md:p-8 mb-8">
    <p class="text-gray-600 text-sm mb-2">Processed in this session</p>
    <p class="text-3xl md:text-4xl font-bold text-blue-600">{processedCount}</p>
  </div>

  <!-- Action Buttons -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <button
      on:click={handleProcessVehicle}
      class="card p-8 text-center hover:shadow-lg transition-all hover:scale-105"
    >
      <div class="text-4xl mb-4">🚗</div>
      <h3 class="text-xl font-semibold text-gray-900 mb-2">Process Vehicle</h3>
      <p class="text-gray-600">Screen next vehicle entry</p>
    </button>

    <div class="card p-8 text-center opacity-50 cursor-not-allowed">
      <div class="text-4xl mb-4">📋</div>
      <h3 class="text-xl font-semibold text-gray-900 mb-2">View Records</h3>
      <p class="text-gray-600">Coming soon</p>
    </div>
  </div>
</div>

<style>
</style>
