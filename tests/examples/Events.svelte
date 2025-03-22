<script lang="ts">
  import VisibilityChange from "svelte-visibility-change";

  let events: string[] = [];
</script>

<VisibilityChange
  on:visible={() => (events = [...events, "on:visible"])}
  on:hidden={() => (events = [...events, "on:hidden"])}
/>

{events.join(", ")}
