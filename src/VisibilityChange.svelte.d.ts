import type { SvelteComponentTyped } from "svelte";

export type VisibilityState = DocumentVisibilityState;

export interface VisibilityChangeProps {
  /**
   * The current visibility state of the document.
   */
  state?: VisibilityState;

  /**
   * `true` if the page is visible ("focused").
   * @default false
   */
  visible?: boolean;

  /**
   * `true` if the page is not visible ("blurred").
   * @default false
   */
  hidden?: boolean;
}

export default class extends SvelteComponentTyped<
  VisibilityChangeProps,
  {
    /**
     * Dispatched whenever the page is focused or blurred.
     */
    change: CustomEvent<{
      state: DocumentVisibilityState;
      visible: boolean;
      hidden: boolean;
    }>;

    /**
     * Dispatched when the browser tab is focused.
     */
    visible: CustomEvent<null>;

    /**
     * Dispatched when the browser tab is blurred.
     */
    hidden: CustomEvent<null>;
  },
  {}
> {}
