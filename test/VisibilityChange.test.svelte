<script lang="ts">
  import VisibilityChange, { visibilityChange } from "../types";
  import VS from "../types/VisibilityChange.svelte";
  import {
    VisibilityState,
    VisibilityChangeProps,
  } from "../types/VisibilityChange.svelte";
  import { OnChangeEvent } from "../types/visibility-change";

  let state: VisibilityState;
  let visible: boolean;
  let hidden: boolean;
  let props: VisibilityChangeProps = { state: "hidden" };

  const onChange: OnChangeEvent = ({ detail }) => {
    console.log(detail.state); // "visible" | "hidden"
    console.log(detail.visible); // boolean
    console.log(detail.hidden); // boolean
  };
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

<div use:visibilityChange on:change={onChange} />
