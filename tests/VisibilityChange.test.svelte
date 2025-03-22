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

<div data-testid="state">
  {state}
</div>

<div data-testid="hidden">
  {hidden}
</div>

<div data-testid="visible">
  {visible}
</div>
