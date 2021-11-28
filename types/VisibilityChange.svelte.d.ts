import { SvelteComponentTyped } from "svelte";

export type VisibilityState = "visible" | "hidden";

export interface VisibilityChangeProps {
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
  VisibilityChangeProps,
  {
    /**
     * Dispatched whenever the browser tab is focused or blurred
     */
    change: CustomEvent<{
      state: VisibilityState;
      visible: boolean;
      hidden: boolean;
    }>;

    /**
     * Dispatched when the browser tab is focused
     */
    visible: CustomEvent<any>;

    /**
     * Dispatched when the browser tab is blurred
     */
    hidden: CustomEvent<any>;
  },
  {}
> {}
