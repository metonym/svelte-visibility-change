<script lang="ts">
  import VisibilityChange from "../types";
  import VS from "../types/VisibilityChange.svelte";
  import type {
    VisibilityState,
    VisibilityChangeProps,
  } from "../types/VisibilityChange.svelte";

  let state: VisibilityState;
  let visible: boolean;
  let hidden: boolean;
  let props: VisibilityChangeProps = { state: "hidden" };
</script>

<!-- svelte-ignore missing-declaration -->
<VisibilityChange
  bind:state
  bind:visible
  bind:hidden
  on:visible
  on:hidden
  on:change={(e) => {
    console.log(e.detail.state); // "visible" | "hidden"
    console.log(e.detail.visible); // boolean
    console.log(e.detail.hidden); // boolean
  }}
/>

<!-- svelte-ignore missing-declaration -->
<VS bind:visible {...props} />
