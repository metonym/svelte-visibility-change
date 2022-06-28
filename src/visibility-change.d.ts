import type { Action } from "svelte/action";

type VisibilityChangeAction = Action<HTMLElement>;

export const visibilityChange: VisibilityChangeAction;
