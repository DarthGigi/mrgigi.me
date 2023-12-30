<script lang="ts">
  import GigiImage from '$assets/images/gigi/Gigi36.png';
  import videoPosterImage from '$assets/images/jpg/wonderfultools_thumbnail.jpg';
  import HomeImage from '$assets/images/png/home.png';
  import SteveImage from '$assets/images/webp/Steve Jobs.webp';
  import Image from '$lib/components/image.svelte';
  import VisionButtons from '$lib/components/visionOS/visionButtons.svelte';
  import VisionWindow from '$lib/components/visionOS/visionWindow.svelte';
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import type { Picture } from '$lib/types';
  import { onMount } from 'svelte';

  import { cubicInOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';

  const HomeImg = HomeImage as unknown as Picture;
  const GigiImg = GigiImage as unknown as Picture;
  const SteveImg = SteveImage as unknown as Picture;
  const videoPosterImg = videoPosterImage as unknown as Picture;

  export let isDeepDiveAboutOpen: boolean;
  let gigiName: HTMLAudioElement;

  let aboutOpen = true;
  let designOpen = false;
  let appleOpen = false;
  let contactOpen = false;

  let form: HTMLFormElement;
  let submitButton: HTMLButtonElement;

  function open(card: string) {
    aboutOpen = false;
    designOpen = false;
    appleOpen = false;
    contactOpen = false;
    switch (card) {
      case 'about':
        aboutOpen = true;
        break;
      case 'design':
        designOpen = true;
        break;
      case 'apple':
        appleOpen = true;
        break;
      case 'contact':
        contactOpen = true;
        break;
    }
  }

  function sendForm() {
    if (localStorage.getItem('lastMessageSent') !== null) {
      console.log('Debug 1');
      const lastMessageSent = localStorage.getItem('lastMessageSent') as unknown as number;
      const timeSinceLastMessageSent = Date.now() - lastMessageSent;
      if (timeSinceLastMessageSent < 3600000) {
        console.log('Debug 1.5');
        submitButton.disabled = true;
        submitButton.textContent = 'Please wait 1 hour before sending another message';
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = 'Send';
        }, 3600000 - timeSinceLastMessageSent);
        return;
      }
    }

    // send data to server
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formData
    })
      .then((res) => {
        if (res.ok) {
          form.reset();
          submitButton.disabled = true;
          submitButton.textContent = 'Message sent';
          localStorage.setItem('lastMessageSent', Date.now().toString());
          setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Send';
          }, 3600000);
        } else {
          submitButton.disabled = true;
          submitButton.textContent = 'Something went wrong';
          setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Send';
          }, 5000);
        }
      })
      .catch(() => {
        submitButton.disabled = true;
        submitButton.textContent = 'Something went wrong';
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = 'Send';
        }, 3600000);
      });
    form.reset();
  }

  onMount(() => {
    if (localStorage.getItem('lastMessageSent') !== null) {
      const lastMessageSent = localStorage.getItem('lastMessageSent') as unknown as number;
      if (lastMessageSent > Date.now() - 3600000) {
        submitButton.disabled = true;
        submitButton.textContent = 'Please wait 1 hour before sending another message';
        setTimeout(
          () => {
            submitButton.disabled = false;
            submitButton.textContent = 'Send';
          },
          3600000 - (Date.now() - lastMessageSent)
        );
      }
    }
  });
</script>

<Deepdive bind:isDeepDiveOpen={isDeepDiveAboutOpen} class="relative">
  <Image class="pointer-events-none fixed inset-0 h-full w-full select-none bg-fixed object-cover object-center blur-sm" src={HomeImg} alt="Star Trails" />
  <VisionWindow>
    <svelte:fragment slot="buttons">
      <VisionButtons on:click={() => open('about')} class={aboutOpen ? 'bg-white/20' : ''}>
        <svg class="h-5 w-5" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.01856 24.1782H21.7334C22.9873 24.1782 23.7373 23.5923 23.7373 22.6196C23.7373 19.5962 19.9521 15.4243 13.8701 15.4243C7.79981 15.4243 4.01465 19.5962 4.01465 22.6196C4.01465 23.5923 4.76465 24.1782 6.01856 24.1782ZM13.8818 13.3267C16.3896 13.3267 18.5693 11.0767 18.5693 8.14697C18.5693 5.25244 16.3896 3.10791 13.8818 3.10791C11.374 3.10791 9.19434 5.29932 9.19434 8.17041C9.19434 11.0767 11.3623 13.3267 13.8818 13.3267Z" fill="white" fill-opacity="0.85" />
        </svg>
      </VisionButtons>
      <VisionButtons on:click={() => open('design')} class={designOpen ? 'bg-white/20' : ''}>
        <svg class="h-5 w-5" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.1768 25.5762C20.1104 25.5762 23.4033 23.8301 23.4033 21.2519C23.4033 18.9433 21.4346 18.4277 21.4346 17.0683C21.4346 15.1933 28.2432 14.8183 28.2432 10.002C28.2432 5.24414 23.333 2.10352 16.0439 2.10352C6.46973 2.10352 0.0126953 6.88477 0.0126953 14.0449C0.0126953 20.9355 6.14161 25.5762 15.1768 25.5762ZM14.9189 21.0996C13.208 21.0996 11.8018 19.7051 11.8018 17.9824C11.8018 16.2715 13.208 14.8652 14.9189 14.8652C16.6416 14.8652 18.0479 16.2715 18.0479 17.9824C18.0479 19.7051 16.6416 21.0996 14.9189 21.0996Z" fill="white" fill-opacity="0.85" />
          <path d="M5.55566 15.4746C4.48925 15.4746 3.59863 14.584 3.59863 13.5058C3.59863 12.4746 4.52441 11.5723 5.55566 11.5723C6.63378 11.5723 7.50097 12.4277 7.50097 13.5058C7.50097 14.584 6.63378 15.4746 5.55566 15.4746Z" fill="grey" />
          <path d="M10.0557 11.3262C8.67286 11.3262 7.57129 10.248 7.57129 8.86523C7.57129 7.51757 8.67286 6.43945 10.0557 6.43945C11.3916 6.43945 12.5049 7.51757 12.5049 8.86523C12.5049 10.248 11.4033 11.3262 10.0557 11.3262Z" fill="grey" />
          <path d="M16.3018 9.47461C15.2236 9.47461 14.3096 8.59571 14.3096 7.50586C14.3096 6.41602 15.2236 5.53711 16.3018 5.53711C17.4033 5.53711 18.2705 6.41602 18.2705 7.50586C18.2705 8.59571 17.4033 9.47461 16.3018 9.47461Z" fill="grey" />
          <path d="M21.8213 10.5059C20.9307 10.5059 20.2041 9.80274 20.2041 8.91211C20.2041 8.03321 20.9307 7.30664 21.8213 7.30664C22.7002 7.30664 23.4033 8.03321 23.4033 8.91211C23.4033 9.80274 22.7002 10.5059 21.8213 10.5059Z" fill="grey" />
        </svg>
      </VisionButtons>
      <VisionButtons on:click={() => open('apple')} class={appleOpen ? 'bg-white/20' : ''}>
        <svg class="h-5 w-5" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.6863 7.61279C16.9402 7.61279 15.5105 8.6792 14.5964 8.6792C13.6238 8.6792 12.3582 7.68311 10.8347 7.68311C7.94019 7.68311 5.0105 10.0737 5.0105 14.5737C5.0105 17.3862 6.08862 20.351 7.43628 22.2612C8.58472 23.8784 9.59253 25.2026 11.0457 25.2026C12.4753 25.2026 13.1082 24.2534 14.8894 24.2534C16.6941 24.2534 17.1043 25.1792 18.6863 25.1792C20.2566 25.1792 21.2996 23.7378 22.2957 22.3198C23.3972 20.6909 23.866 19.1089 23.8777 19.0268C23.7839 19.0034 20.7839 17.7729 20.7839 14.3393C20.7839 11.3628 23.1394 10.0269 23.28 9.92139C21.7214 7.68311 19.3425 7.61279 18.6863 7.61279ZM17.866 5.71435C18.5808 4.84717 19.0847 3.66357 19.0847 2.46826C19.0847 2.3042 19.073 2.14014 19.0496 2.01123C17.8777 2.05811 16.4714 2.78467 15.6394 3.76904C14.9714 4.51904 14.3621 5.71435 14.3621 6.90967C14.3621 7.09717 14.3972 7.27295 14.4089 7.33154C14.4792 7.34326 14.5964 7.3667 14.7253 7.3667C15.7683 7.3667 17.0808 6.66357 17.866 5.71435Z" fill="white" fill-opacity="0.85" />
        </svg>
      </VisionButtons>
      <VisionButtons on:click={() => open('contact')} class={contactOpen ? 'bg-white/20' : ''}>
        <svg class="h-5 w-5" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1916 15.4742C14.5783 15.4742 14.9533 15.3218 15.3166 14.9937L27.0236 4.68115C26.3908 4.25928 25.6643 4.07178 24.6565 4.07178H3.73853C2.73072 4.07178 2.00415 4.25928 1.35962 4.68115L13.0666 14.9937C13.4416 15.3218 13.8166 15.4742 14.1916 15.4742ZM0.363526 22.3765L9.0354 13.7163L0.340088 6.05225C0.211182 6.29834 0.0588379 6.896 0.0588379 7.70459V20.6421C0.0588379 21.3921 0.176026 21.9312 0.363526 22.3765ZM3.38696 24.2749H25.008C25.8635 24.2749 26.5315 24.064 26.9768 23.7593L18.0588 14.8413L16.3479 16.3648C15.6682 16.9624 14.9299 17.2671 14.1916 17.2671C13.465 17.2671 12.7268 16.9624 12.0471 16.3648L10.3361 14.8413L1.41822 23.7593C1.86353 24.064 2.51978 24.2749 3.38696 24.2749ZM28.0315 22.3765C28.2072 21.9312 28.3361 21.3921 28.3361 20.6421V7.70459C28.3361 6.896 28.1838 6.29834 28.0549 6.05225L19.3596 13.7163L28.0315 22.3765Z" fill="white" fill-opacity="0.85" />
        </svg>
      </VisionButtons>
    </svelte:fragment>

    {#if aboutOpen}
      <div class="flex h-full w-full flex-col-reverse items-center justify-center px-4 will-change-transform md:flex-row md:px-0" transition:slide={{ duration: 300, easing: cubicInOut }}>
        <Image class="pointer-events-none bottom-0 right-0 select-none max-md:h-56 max-md:w-auto" src={GigiImg} alt="Gigi Mac" />
        <div class="flex h-full w-full max-w-md flex-col items-center justify-center">
          <h1 class="text-center text-4xl font-bold text-white">About</h1>
          <p class="mt-4 text-center text-white">
            Hi, I'm Gigi (<bold>&#x2f;&#x2c8;&#x261;&#x69;&#x2d0;&#x2cc;&#x261;&#x69;&#x2d0;&#x2f;</bold><button class="inline h-full" on:click={() => gigiName.play()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline h-4 w-4"><path d="M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 001.06 1.06 7 7 0 000-9.899z" /><path d="M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z" /></svg></button>).
          </p>
          <audio bind:this={gigiName} class="hidden">
            <source src="/assets/audio/mp3/gigi.mp3" type="audio/mpeg" />
          </audio>
          <p class="mt-4 text-center text-white">I am a {new Date().getFullYear() - 2004} year old student from the Netherlands studying Software Engineering. <br /> I am also a Full-Stack Developer and Designer.</p>
        </div>
      </div>
    {/if}

    {#if designOpen}
      <div class="z-10 flex h-full w-full flex-col items-center justify-center gap-10 will-change-transform" transition:slide={{ duration: 300, easing: cubicInOut }}>
        <div class="flex max-w-md flex-col items-center justify-center">
          <h1 class="text-center text-4xl font-bold text-white">Design</h1>
          <p class="mt-4 text-center text-white">I love designing beautiful and functional interfaces. <br /> That's why I redesign this website which is my personal portfolio website every year, using the knowledge and tools I have gained in the past year.</p>
        </div>
        <figure class="mx-auto max-w-screen-sm text-center">
          <svg class="mx-auto mb-3 h-10 w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p class="text-xl font-medium italic text-white">"Design is not just what it looks like and feels like. Design is how it works."</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center justify-center space-x-3">
            <Image class="h-6 w-6 rounded-full object-cover" src={SteveImg} alt="Steve Jobs" />
            <div class="flex items-center divide-x-2 divide-white/60">
              <cite class="pr-3 font-medium text-white">Steve Jobs</cite>
              <cite class="pl-3 text-sm text-white/80">Founder and former CEO of Apple</cite>
            </div>
          </figcaption>
        </figure>
      </div>
    {/if}

    {#if appleOpen}
      <div class="flex h-full w-full flex-col items-center justify-center gap-2 pb-4 will-change-transform md:px-0" transition:slide={{ duration: 300, easing: cubicInOut }}>
        <div class="flex max-w-md flex-col items-center justify-center">
          <h1 class="text-center text-4xl font-bold text-white">Apple</h1>
          <p class="mt-4 text-center text-white">I am a big fan of Apple. As you can see I've recreated visionOS' interface with just Svelte and Tailwind CSS.</p>
        </div>
        <div class="relative md:w-1/2">
          <video autoplay playsinline disablepictureinpicture loop muted class="lozad pointer-events-none relative rounded-md" poster={videoPosterImg.img.src}>
            <source src="/assets/videos/webm/wonderfultools.webm" type="video/webm" />
            <source src="/assets/videos/mp4/wonderfultools.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p class="absolute left-1/2 mt-2 -translate-x-1/2 text-center text-xs text-white/20">Courtesy of apple.com</p>
        </div>
      </div>
    {/if}

    {#if contactOpen}
      <div class="flex h-full w-full items-center justify-center will-change-transform" transition:slide={{ duration: 300, easing: cubicInOut }}>
        <div class="flex h-full w-full max-w-md flex-col items-center justify-center">
          <h1 class="mb-4 text-center text-4xl font-bold text-white">Contact</h1>
          <form id="emailForm" action="https://formspree.io/f/xknevajg" method="POST" target="_blank" class="w-full space-y-8 px-4 md:px-0" bind:this={form} on:submit|preventDefault={sendForm}>
            <div class="flex gap-8 md:flex-col">
              <div>
                <label for="email" class="mb-2 block text-sm font-medium text-neutral-100">Your email</label>
                <input name="email" type="email" id="email" autocomplete="email" class="block w-full rounded-lg border border-white/[0.18] bg-white/25 p-2.5 text-base text-white shadow-sm drop-shadow-md focus:outline-none focus:ring-0 md:text-sm" required />
              </div>
              <div>
                <label for="subject" class="mb-2 block text-sm font-medium text-neutral-100">Subject</label>
                <input name="subject" type="text" id="subject" class="block w-full rounded-lg border border-white/[0.18] bg-white/25 p-2.5 text-base text-white shadow-sm drop-shadow-md focus:outline-none focus:ring-0 md:text-sm" required />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="mb-2 block text-sm font-medium text-neutral-100">Message</label>
              <textarea name="message" id="message" rows="6" class="block w-full resize-none rounded-lg border border-white/[0.18] bg-white/25 p-2.5 text-base text-white shadow-sm drop-shadow-md focus:outline-none focus:ring-0 md:text-sm" required></textarea>
            </div>
            <button id="submitButton" type="submit" class="rounded-lg border border-white/[0.18] bg-white/25 p-2.5 px-5 py-3 text-center text-sm font-medium text-white shadow-sm drop-shadow-md transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-0 sm:w-fit" bind:this={submitButton}>Send</button>
          </form>
        </div>
      </div>
    {/if}
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
