<script>
  /**
   * @typedef {"visible" | "hidden"} VisibilityState
   * @event {{ state: VisibilityState; visible: boolean; hidden: boolean; }} change
   */

  /**
   * Determine the current visibility state of the document
   * @type {VisibilityState}
   */
  export let state = undefined;

  /** `true` if the page is visible */
  export let visible = false;

  /** `true` if the page is not visible (i.e., "blurred") */
  export let hidden = false;

  import { onMount, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function visibilityChange() {
    state = document.visibilityState;
    dispatch("change", { state, visible, hidden });
  }

  onMount(() => {
    state = document.visibilityState;
    document.addEventListener("visibilitychange", visibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", visibilityChange);
    };
  });

  $: visible = state === "visible";
  $: hidden = state === "hidden";
  $: visible && dispatch("visible");
  $: hidden && dispatch("hidden");
</script>
