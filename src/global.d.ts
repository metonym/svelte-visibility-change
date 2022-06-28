interface VisibilityChangeDetail {
  state: "visible" | "hidden";
  visible: boolean;
  hidden: boolean;
}

declare namespace svelte.JSX {
  interface HTMLProps {
    onvisibilitychange?: (event: CustomEvent<VisibilityChangeDetail>) => void;
  }
}
