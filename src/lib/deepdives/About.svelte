<script lang="ts">
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import DeepdiveCloseBtn from '$lib/components/deepdiveCloseBtn.svelte';

  export let isDeepDiveAboutOpen: boolean;
</script>

<Deepdive bind:isDeepDiveOpen={isDeepDiveAboutOpen}>
  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveAboutOpen} />
</Deepdive>
