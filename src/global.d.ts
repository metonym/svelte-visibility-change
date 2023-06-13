declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    "on:visibilitychange"?: (
      event: CustomEvent<{
        state: DocumentVisibilityState;
        visible: boolean;
        hidden: boolean;
      }>
    ) => void;
  }
}
