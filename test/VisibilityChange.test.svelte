<script lang="ts">
  import VisibilityChange from "../types";
  import type { VisibilityState } from "../types/VisibilityChange";

  let state: VisibilityState;
  let visible: boolean;
  let hidden: boolean;
</script>

<!-- svelte-ignore missing-declaration -->
<VisibilityChange
  bind:state
  bind:visible
  bind:hidden
  on:visible
  on:hidden
  on:change={(e) => {
    console.log(e.detail);
  }}
/>
