<script lang="ts">
  import { visibilityChange } from "../src";
</script>

<div
  use:visibilityChange
  on:change={(e) => {
    console.log(e.detail);
  }}
/>
