<script lang="ts">
  import { visibilityChange } from "../src";
</script>

<div
  use:visibilityChange
  on:visibilitychange={(e) => {
    console.log(e.detail);
  }}
/>
