declare namespace svelte.JSX {
  interface HTMLProps {
    onvisibilitychange?: (
      event: CustomEvent<{
        state: DocumentVisibilityState;
        visible: boolean;
        hidden: boolean;
      }>
    ) => void;
  }
}
