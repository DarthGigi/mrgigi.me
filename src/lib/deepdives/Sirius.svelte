<script lang="ts">
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import DeepdiveCloseBtn from '$lib/components/deepdiveCloseBtn.svelte';

  export let isDeepDiveSiriusOpen: boolean;
</script>

<Deepdive bind:isDeepDiveOpen={isDeepDiveSiriusOpen}>
  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveSiriusOpen} />
</Deepdive>
