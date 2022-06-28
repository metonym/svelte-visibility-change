<script>
  /**
   * Determine the current visibility state of the document
   * @type {"visible" | "hidden"}
   */
  export let state = undefined;

  /** `true` if the page is visible */
  export let visible = false;

  /** `true` if the page is not visible (i.e., "blurred") */
  export let hidden = false;

  import { onMount, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const change =  () => {
    state = document.visibilityState;
    dispatch("change", { state, visible, hidden });
  };

  onMount(() => {
    state = document.visibilityState;
    document.addEventListener("visibilitychange", change);
    return () => document.removeEventListener("visibilitychange", change);
  });

  $: visible = state === "visible";
  $: hidden = state === "hidden";
  $: visible && dispatch("visible");
  $: hidden && dispatch("hidden");
</script>
