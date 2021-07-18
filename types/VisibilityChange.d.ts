/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export type VisibilityState = "visible" | "hidden";

export interface defaultProps {
  /**
   * Determine the current visibility state of the document
   */
  state?: VisibilityState;

  /**
   * `true` if the page is visible
   * @default false
   */
  visible?: boolean;

  /**
   * `true` if the page is not visible (i.e., "blurred")
   * @default false
   */
  hidden?: boolean;
}

export default class extends SvelteComponentTyped<
  defaultProps,
  {
    change: CustomEvent<{
      state: VisibilityState;
      visible: boolean;
      hidden: boolean;
    }>;
    visible: CustomEvent<any>;
    hidden: CustomEvent<any>;
  },
  {}
> {}
