<script lang="ts">
  import GigiImage from '$assets/images/gigi/Gigi36.png';
  import HomeImage from '$assets/images/png/home.png';
  import Image from '$lib/components/image.svelte';
  import VisionButtons from '$lib/components/visionOS/visionButtons.svelte';
  import VisionWindow from '$lib/components/visionOS/visionWindow.svelte';
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import type { Picture } from '$lib/types';
  const HomeImg = HomeImage as unknown as Picture;
  const GigiImg = GigiImage as unknown as Picture;

  export let isDeepDiveAboutOpen: boolean;
  let gigiName: HTMLAudioElement;
</script>

<Deepdive bind:isDeepDiveOpen={isDeepDiveAboutOpen} class="relative">
  <Image class="pointer-events-none fixed inset-0 h-full w-full select-none bg-fixed object-cover object-center blur-sm" src={HomeImg} alt="Star Trails" />
  <VisionWindow>
    <svelte:fragment slot="buttons">
      <VisionButtons class="bg-white/20">
        <svg class="h-5 w-5" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.01856 24.1782H21.7334C22.9873 24.1782 23.7373 23.5923 23.7373 22.6196C23.7373 19.5962 19.9521 15.4243 13.8701 15.4243C7.79981 15.4243 4.01465 19.5962 4.01465 22.6196C4.01465 23.5923 4.76465 24.1782 6.01856 24.1782ZM13.8818 13.3267C16.3896 13.3267 18.5693 11.0767 18.5693 8.14697C18.5693 5.25244 16.3896 3.10791 13.8818 3.10791C11.374 3.10791 9.19434 5.29932 9.19434 8.17041C9.19434 11.0767 11.3623 13.3267 13.8818 13.3267Z" fill="white" fill-opacity="0.85" />
        </svg>
      </VisionButtons>
      <VisionButtons>
        <svg class="h-5 w-5" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.69434 24.5854H23.9677C26.4287 24.5854 27.6474 23.3784 27.6474 20.9643V6.64404C27.6474 4.22998 26.4287 3.01123 23.9677 3.01123H3.69434C1.24512 3.01123 0.0146484 4.22998 0.0146484 6.64404V20.9643C0.0146484 23.3784 1.24512 24.5854 3.69434 24.5854Z" fill="white" />
          <path d="M4.88965 12.1167L7.7959 10.3472L4.88965 8.60108C3.92871 8.01515 4.73731 6.58546 5.79199 7.24171L9.26074 9.40968C9.91699 9.83155 9.95215 10.8628 9.26074 11.2964L5.79199 13.476C4.73731 14.1323 3.94043 12.6792 4.88965 12.1167ZM9.98731 13.4526C9.98731 13.019 10.3271 12.6675 10.7607 12.6675H15.3662C15.8115 12.6675 16.1513 13.019 16.1513 13.4526C16.1513 13.8862 15.8115 14.2378 15.3662 14.2378H10.7607C10.3271 14.2378 9.98731 13.8862 9.98731 13.4526Z" fill="grey" />
        </svg>
      </VisionButtons>
      <VisionButtons>
        <svg class="h-5 w-5" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.6863 7.61279C16.9402 7.61279 15.5105 8.6792 14.5964 8.6792C13.6238 8.6792 12.3582 7.68311 10.8347 7.68311C7.94019 7.68311 5.0105 10.0737 5.0105 14.5737C5.0105 17.3862 6.08862 20.351 7.43628 22.2612C8.58472 23.8784 9.59253 25.2026 11.0457 25.2026C12.4753 25.2026 13.1082 24.2534 14.8894 24.2534C16.6941 24.2534 17.1043 25.1792 18.6863 25.1792C20.2566 25.1792 21.2996 23.7378 22.2957 22.3198C23.3972 20.6909 23.866 19.1089 23.8777 19.0268C23.7839 19.0034 20.7839 17.7729 20.7839 14.3393C20.7839 11.3628 23.1394 10.0269 23.28 9.92139C21.7214 7.68311 19.3425 7.61279 18.6863 7.61279ZM17.866 5.71435C18.5808 4.84717 19.0847 3.66357 19.0847 2.46826C19.0847 2.3042 19.073 2.14014 19.0496 2.01123C17.8777 2.05811 16.4714 2.78467 15.6394 3.76904C14.9714 4.51904 14.3621 5.71435 14.3621 6.90967C14.3621 7.09717 14.3972 7.27295 14.4089 7.33154C14.4792 7.34326 14.5964 7.3667 14.7253 7.3667C15.7683 7.3667 17.0808 6.66357 17.866 5.71435Z" fill="white" fill-opacity="0.85" />
        </svg>
      </VisionButtons>
      <VisionButtons>
        <svg class="h-5 w-5" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1916 15.4742C14.5783 15.4742 14.9533 15.3218 15.3166 14.9937L27.0236 4.68115C26.3908 4.25928 25.6643 4.07178 24.6565 4.07178H3.73853C2.73072 4.07178 2.00415 4.25928 1.35962 4.68115L13.0666 14.9937C13.4416 15.3218 13.8166 15.4742 14.1916 15.4742ZM0.363526 22.3765L9.0354 13.7163L0.340088 6.05225C0.211182 6.29834 0.0588379 6.896 0.0588379 7.70459V20.6421C0.0588379 21.3921 0.176026 21.9312 0.363526 22.3765ZM3.38696 24.2749H25.008C25.8635 24.2749 26.5315 24.064 26.9768 23.7593L18.0588 14.8413L16.3479 16.3648C15.6682 16.9624 14.9299 17.2671 14.1916 17.2671C13.465 17.2671 12.7268 16.9624 12.0471 16.3648L10.3361 14.8413L1.41822 23.7593C1.86353 24.064 2.51978 24.2749 3.38696 24.2749ZM28.0315 22.3765C28.2072 21.9312 28.3361 21.3921 28.3361 20.6421V7.70459C28.3361 6.896 28.1838 6.29834 28.0549 6.05225L19.3596 13.7163L28.0315 22.3765Z" fill="white" fill-opacity="0.85" />
        </svg>
      </VisionButtons>
    </svelte:fragment>

    <div class="flex h-full w-full items-center justify-center">
      <Image class="pointer-events-none bottom-0 right-0 select-none" src={GigiImg} alt="Gigi Mac" />
      <div class="flex h-full w-full max-w-md flex-col items-center justify-center">
        <h1 class="text-center text-4xl font-bold text-white">About Me</h1>
        <p class="mt-4 text-center text-white">
          Hi, I'm Gigi (<bold>&#x2f;&#x2c8;&#x261;&#x69;&#x2d0;&#x2cc;&#x261;&#x69;&#x2d0;&#x2f;</bold><button class="inline h-full" on:click={() => gigiName.play()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline h-4 w-4"><path d="M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 001.06 1.06 7 7 0 000-9.899z" /><path d="M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z" /></svg></button>).
        </p>
        <audio bind:this={gigiName} class="hidden">
          <source src="/assets/audio/mp3/gigi.mp3" type="audio/mpeg" />
        </audio>
        <p class="mt-4 text-center text-white">I am a {new Date().getFullYear() - 2004} year old student from the Netherlands studying Software Engineering. <br /> I am also a Full-Stack Developer and Designer.</p>
      </div>
    </div>
  </VisionWindow>

  <button
    slot="button"
    on:click
    class="relative overflow-hidden rounded-full border-white/[0.18] bg-white/25 drop-shadow backdrop-blur-xl transition-colors duration-300 ease-in-out hover:bg-white/40 focus:bg-white/40"
    on:click={() => {
      isDeepDiveAboutOpen = false;
    }}>
    <svg class="relative z-20 transition-all duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="41" height="41"><path fill-rule="evenodd" fill="white" d="M22.173 20.25l6.345-6.345c.481-.481.481-1.346 0-1.923-.48-.481-1.346-.481-1.922 0l-6.346 6.345-6.345-6.345c-.481-.481-1.346-.481-1.923 0-.481.481-.481 1.346 0 1.923l6.345 6.345-6.345 6.346c-.481.48-.481 1.346 0 1.922.481.481 1.346.481 1.923 0l6.345-6.345 6.346 6.345c.48.481 1.346.481 1.922 0 .481-.48.481-1.346 0-1.922l-6.345-6.346z" /></svg></button>
</Deepdive>
