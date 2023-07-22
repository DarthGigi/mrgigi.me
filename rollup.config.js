import image from 'svelte-image';

svelte({
  preprocess: image({
    placeholder: 'trace'
  })
});
