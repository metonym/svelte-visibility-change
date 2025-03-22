<script lang="ts">
  import { visibilityChange } from "svelte-visibility-change";
</script>

<div
  use:visibilityChange
  on:visibilitychange={(e) => {
    console.log(e.detail);
  }}
>
</div>
