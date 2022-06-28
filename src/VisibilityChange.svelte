<script>
  /**
   * The current visibility state of the document.
   * @type {DocumentVisibilityState}
   */
  export let state = undefined;

  /** `true` if the page is visible ("focused"). */
  export let visible = false;

  /** `true` if the page is not visible ("blurred"). */
  export let hidden = false;

  import { onMount, createEventDispatcher, tick } from "svelte";

  const dispatch = createEventDispatcher();

  const change = async () => {
    state = document.visibilityState;
    await tick();
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
