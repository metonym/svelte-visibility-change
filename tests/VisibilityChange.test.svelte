<script lang="ts">
  import VisibilityChange from "svelte-visibility-change";

  let state: DocumentVisibilityState;
  let hidden: boolean;
  let visible: boolean;

  $: if (typeof window !== "undefined") {
    document.title = state;
  }
</script>

<VisibilityChange
  bind:state
  bind:hidden
  bind:visible
  on:change={(e) => {
    console.log(e.detail);
  }}
  on:hidden={() => {
    console.log("hidden");
  }}
  on:visible={() => {
    console.log("visible");
  }}
/>

<div data-state>
  {state}
</div>

<div data-hidden>
  {hidden}
</div>

<div data-visible>
  {visible}
</div>
