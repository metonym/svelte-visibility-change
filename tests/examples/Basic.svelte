<script lang="ts">
  import VisibilityChange from "svelte-visibility-change";

  let state: "visible" | "hidden";

  $: if (typeof window !== "undefined") {
    document.title = state;
  }
</script>

<VisibilityChange bind:state />
