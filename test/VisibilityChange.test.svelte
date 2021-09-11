<script lang="ts">
  import VisibilityChange from "../types";
  import VS from "../types/VisibilityChange.svelte";
  import type { VisibilityState } from "../types/VisibilityChange.svelte";

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

<!-- svelte-ignore missing-declaration -->
<VS bind:visible />
