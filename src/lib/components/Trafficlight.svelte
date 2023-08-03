<div class={`flex gap-1 ${$$props.class}`}>
  <button
    type="button"
    class="h-3 w-3 rounded-full bg-white/20 transition-all duration-200 hover:bg-[#FF5F57]"
    on:click={(e) => {
      // give the element classes
      e.target.classList.add('scale-150', 'opacity-0');
      setTimeout(() => {
        e.target.classList.add('scale-0');
        e.target.classList.remove('scale-150');
      }, 300);
      setTimeout(() => {
        e.target.classList.remove('scale-0', 'opacity-0', 'scale-150');
      }, 5000);
    }}
  />
  <button
    type="button"
    class="h-3 w-3 rounded-full bg-white/20 transition-all duration-200 hover:bg-[#FDBB2E]"
    on:click={(e) => {
      // give the element classes
      e.target.classList.add('scale-150', 'opacity-0');
      setTimeout(() => {
        e.target.classList.add('scale-0');
        e.target.classList.remove('scale-150');
      }, 300);
      setTimeout(() => {
        e.target.classList.remove('scale-0', 'opacity-0', 'scale-150');
      }, 5000);
    }}
  />
  <button
    class="h-3 w-3 rounded-full bg-white/20 transition-all duration-200 hover:bg-[#27C840]"
    on:click={(e) => {
      // give the element classes
      e.target.classList.add('scale-150', 'opacity-0');
      setTimeout(() => {
        e.target.classList.add('scale-0');
        e.target.classList.remove('scale-150');
      }, 300);
      setTimeout(() => {
        e.target.classList.remove('scale-0', 'opacity-0', 'scale-150');
      }, 5000);
    }}
  />
</div>
