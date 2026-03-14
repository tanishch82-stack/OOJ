<!-- Land Border Dashboard Page -->
<script>
  import { user, vehicleEntries, dashboardStats } from "$lib/stores.js";
  import StatCard from "$lib/components/StatCard.svelte";
  import VehicleTable from "$lib/components/VehicleTable.svelte";
  import ModuleCard from "$lib/components/ModuleCard.svelte";
  import { goto } from "$app/navigation";

  // Redirect to login if not authenticated
  $: if (!$user.isAuthenticated) {
    goto("/");
  }
</script>

<div class="px-6 py-8 md:px-12">
  <!-- Header Section -->
  <div class="mb-8">
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900">
      Land Border Dashboard
    </h1>
    <p class="text-gray-600 text-lg mt-2">Ground crossing activity overview.</p>
  </div>

  <!-- Statistics Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
    <StatCard
      label="Vehicles Checked"
      value={$dashboardStats.vehiclesChecked}
      unit=""
    />
    <StatCard
      label="Success Rate"
      value={$dashboardStats.successRate}
      unit="%"
    />
    <StatCard
      label="Flagged Today"
      value={$dashboardStats.flaggedToday}
      unit=""
    />
    <StatCard
      label="Avg. Processing"
      value={$dashboardStats.avgProcessing}
      unit=""
    />
  </div>

  <!-- Vehicle Entries Section -->
  <div class="mb-10">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Vehicle Entries</h2>
    <VehicleTable entries={$vehicleEntries} />
  </div>

  <!-- Module Selection Section -->
  <div class="mb-10">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
    <p class="text-gray-600 text-lg mb-6">
      Select a module to begin processing.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <ModuleCard
        title="Entry Control"
        description="Inbound traveler processing"
        icon="entry"
        onClick={() => goto("/entry-control")}
      />
      <ModuleCard
        title="Exit Monitoring"
        description="Outbound departure checks"
        icon="exit"
        onClick={() => goto("/exit-monitoring")}
      />
      <ModuleCard
        title="Manual Review"
        description="Flagged cases & overrides"
        icon="review"
        onClick={() => goto("/manual-review")}
      />
    </div>
  </div>
</div>

<style>
</style>
