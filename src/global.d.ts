interface VisibilityChangeDetail {
  state: "visible" | "hidden";
  visible: boolean;
  hidden: boolean;
}

declare namespace svelte.JSX {
  interface HTMLProps {
    onchange?: (event: CustomEvent<VisibilityChangeDetail>) => void;
  }
}
