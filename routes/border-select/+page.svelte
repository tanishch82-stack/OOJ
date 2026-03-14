<!-- Border Type Selection Page -->
<script>
  import { borderType, user } from "$lib/stores.js";
  import BorderCard from "$lib/components/BorderCard.svelte";
  import { goto } from "$app/navigation";

  let selectedBorder = null;

  const selectBorder = (type) => {
    selectedBorder = type;
    borderType.set(type);
    setTimeout(() => {
      goto("/dashboard");
    }, 500);
  };

  // Redirect to login if not authenticated
  $: if (!$user.isAuthenticated) {
    goto("/");
  }
</script>

<div class="min-h-screen flex items-center justify-center px-4 py-12">
  <div class="w-full max-w-6xl">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Select Border Type
      </h1>
      <p class="text-gray-600 text-lg">
        This selection is permanent and cannot be changed.
      </p>
    </div>

    <!-- Border Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <!-- Land Border -->
      <BorderCard
        title="Land"
        description="Ground crossings & checkpoints"
        icon="truck"
        isSelected={selectedBorder === "Land"}
        onClick={() => selectBorder("Land")}
      />

      <!-- Air Border -->
      <BorderCard
        title="Air"
        description="Airport terminals & gates"
        icon="plane"
        isSelected={selectedBorder === "Air"}
        onClick={() => selectBorder("Air")}
      />

      <!-- Sea Border -->
      <BorderCard
        title="Sea"
        description="Seaports & maritime entry"
        icon="ship"
        isSelected={selectedBorder === "Sea"}
        onClick={() => selectBorder("Sea")}
      />
    </div>
  </div>
</div>

<style>
</style>
