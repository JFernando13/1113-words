<script>
  import { onMount } from "svelte";

  import LightIcon from "../icons/theme/LightIcon.svelte";
  import DarkIcon from "../icons/theme/DarkIcon.svelte";

  let theme = "dark";

  onMount(() => {
    theme = localStorage.getItem("color-theme") ?? "dark";
    document.documentElement.classList.add("dark");
  });

  function toggleTheme() {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      theme = "dark";
    }
  }
</script>

<button
  class="btn flex justify-center items-center rounded-full"
  on:click={toggleTheme}
>
  {#if theme === "light"}
    <LightIcon />
  {:else}
    <DarkIcon />
  {/if}
</button>

<style>
  button {
    @apply h-11 w-11 bg-primary-600;

    &:hover {
      box-shadow: 0px 0px 8px 4px #1d222f inset;
      transform: scale(0.95);
      @apply bg-primary-500;
    }
  }
</style>
