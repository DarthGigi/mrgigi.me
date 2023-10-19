<script lang="ts">
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import DeepdiveCloseBtn from '$lib/components/deepdiveCloseBtn.svelte';

  export let isDeepDiveMinionOpen: boolean;
</script>

<Deepdive bind:isDeepDiveOpen={isDeepDiveMinionOpen}>
  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveMinionOpen} />
</Deepdive>
