<script lang="ts">
  import Card from '$lib/components/Card.svelte';

  export let isDeepDiveOpen: boolean;
</script>

<Card bind:isDeepDiveOpen class="group row-span-1 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black md:col-span-2 ">
  <div class="flex h-full w-full items-center justify-center bg-cover object-cover p-5">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1315.24 1546.03" class="h-24 w-auto">
      <path fill="currentColor" d="m1046.7,106.38c0,.13-.13.26-.13.26l-14.81,43.14-32.61,94.85-.39-.52-59.9,188.39c-23.77-3.9-47.94-5.85-72.24-5.85-53.01,0-106.93,9.48-159.42,29.36-87.44,33.26-154.88,104.59-183.2,193.72l-147.47,463.71c-152.66-25.08-288.18-128.5-347.17-283.5C9.48,777.45,0,723.54,0,670.52c0-180.86,110.18-351.32,289.35-419.41L929.89,6.86l2.34-.91c.39-.13.78-.26,1.17-.39,65.22-24.29,129.67,35.08,113.3,100.83Z" />
      <path fill="currentColor" d="m268.55,1439.64c0-.13.13-.26.13-.26l14.81-43.14,32.61-94.85.39.52,59.9-188.39c23.77,3.9,47.94,5.85,72.24,5.85,53.01,0,106.93-9.48,159.42-29.36,87.44-33.26,154.88-104.59,183.2-193.72l147.47-463.71c152.66,25.08,288.18,128.5,347.17,283.5,19.88,52.49,29.36,106.41,29.36,159.42,0,180.86-110.18,351.32-289.35,419.41l-640.54,244.26-2.34.91c-.39.13-.78.26-1.17.39-65.22,24.29-129.67-35.08-113.3-100.83Z" />
    </svg>
  </div>
</Card>
